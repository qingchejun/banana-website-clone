"use client"

import type React from "react"

import { useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Upload, ImageIcon, Sparkles } from "lucide-react"
import { Textarea } from "@/components/ui/textarea"

export function ImageUploadSection() {
  const [dragActive, setDragActive] = useState(false)
  const [uploadedImage, setUploadedImage] = useState<string | null>(null)
  const [prompt, setPrompt] = useState("")
  const [isGenerating, setIsGenerating] = useState(false)
  const [outputImage, setOutputImage] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement | null>(null)

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true)
    } else if (e.type === "dragleave") {
      setDragActive(false)
    }
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0])
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0])
    }
  }

  const handleFile = (file: File) => {
    const reader = new FileReader()
    reader.onload = (e) => {
      setUploadedImage(e.target?.result as string)
      setOutputImage(null)
      setError(null)
    }
    reader.readAsDataURL(file)
  }

  const handleGenerate = async () => {
    if (!uploadedImage || !prompt) return
    setIsGenerating(true)
    setError(null)

    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt,
          image: uploadedImage,
        }),
      })

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}))
        throw new Error(errorData?.error || "Failed to generate image.")
      }

      const data = await response.json()
      setOutputImage(data.imageUrl)
    } catch (err) {
      const message = err instanceof Error ? err.message : "Failed to generate image."
      setError(message)
    } finally {
      setIsGenerating(false)
    }
  }

  return (
    <section id="editor" className="py-20 md:py-32 border-b border-border/40">
      <div className="container max-w-6xl px-4 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Try The AI Editor</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Experience the power of natural language image editing. Transform any photo with simple text commands.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Upload Area */}
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <ImageIcon className="w-5 h-5 text-primary" />
              Upload Image
            </h3>

            <div
              className={`relative border-2 border-dashed rounded-lg transition-colors ${
                dragActive ? "border-primary bg-accent/50" : "border-border"
              } ${uploadedImage ? "p-2" : "p-12"}`}
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
              onClick={() => {
                if (!uploadedImage) fileInputRef.current?.click()
              }}
            >
              {uploadedImage ? (
                <div className="relative">
                  <img src={uploadedImage || "/placeholder.svg"} alt="Uploaded" className="w-full h-auto rounded-lg" />
                  <Button
                    size="sm"
                    variant="secondary"
                    className="absolute top-2 right-2"
                    onClick={() => setUploadedImage(null)}
                  >
                    Remove
                  </Button>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center">
                    <Upload className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-center">
                    <p className="text-sm font-medium mb-1">Drop your image here</p>
                    <p className="text-xs text-muted-foreground">or click to browse</p>
                  </div>
                  <Button
                    type="button"
                    variant="secondary"
                    onClick={() => fileInputRef.current?.click()}
                  >
                    Add Image
                  </Button>
                  <input
                    type="file"
                    className="sr-only"
                    onChange={handleChange}
                    accept="image/*"
                    ref={fileInputRef}
                  />
                </div>
              )}
            </div>

            <p className="text-xs text-muted-foreground mt-3">Maximum file size: 10MB. Supports JPG, PNG, WebP</p>
          </Card>

          {/* Prompt Area */}
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-primary" />
              Prompt Engine
            </h3>

            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium mb-2 block">Describe your transformation</label>
                <Textarea
                  placeholder="e.g., Add a sunset background, Change hair color to blonde, Place in a snowy mountain..."
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  rows={6}
                  className="resize-none"
                />
              </div>

              <Button
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 gap-2"
                disabled={!uploadedImage || !prompt || isGenerating}
                onClick={handleGenerate}
              >
                <Sparkles className="w-4 h-4" />
                {isGenerating ? "Generating..." : "Generate Now"}
              </Button>

              {error && <p className="text-sm text-destructive">{error}</p>}

              <div className="pt-4 border-t border-border">
                <p className="text-sm font-medium mb-2">Example prompts:</p>
                <div className="flex flex-wrap gap-2">
                  {["Change background to beach", "Add sunglasses", "Make it winter scene"].map((example) => (
                    <button
                      key={example}
                      onClick={() => setPrompt(example)}
                      className="text-xs px-3 py-1 rounded-full bg-secondary hover:bg-accent transition-colors"
                    >
                      {example}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </div>

        <Card className="p-6 mt-8">
          <h3 className="text-lg font-semibold mb-4">Output Gallery</h3>
          {outputImage ? (
            <img
              src={outputImage}
              alt="Generated output"
              className="w-full h-auto rounded-lg"
            />
          ) : (
            <div className="border border-dashed border-border rounded-lg p-8 text-center text-sm text-muted-foreground">
              Generated images will appear here after you click Generate Now.
            </div>
          )}
        </Card>
      </div>
    </section>
  )
}
