"use client"

import { useState } from "react"
import { useTheme, seasonThemes } from "@/context/ThemeContext"
import type { Season } from "@/config/site"
import { Leaf, Sun, Snowflake, Flower2, Check, Settings2 } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

const seasonIcons: Record<Season, React.ReactNode> = {
  spring: <Flower2 className="h-4 w-4" />,
  summer: <Sun className="h-4 w-4" />,
  autumn: <Leaf className="h-4 w-4" />,
  winter: <Snowflake className="h-4 w-4" />,
}

export function ThemeSwitcher() {
  const { season, setSeason, isAutoDetect, setAutoDetect } = useTheme()
  const [isOpen, setIsOpen] = useState(false)

  const handleSeasonChange = (newSeason: Season) => {
    setAutoDetect(false)
    setSeason(newSeason)
  }

  const handleAutoDetectChange = (checked: boolean) => {
    setAutoDetect(checked)
  }

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="ghost" 
          size="icon"
          className="relative h-9 w-9 rounded-full hover:bg-primary/10"
          aria-label="Change season theme"
        >
          <span className="transition-transform duration-300">
            {seasonIcons[season]}
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel className="flex items-center gap-2">
          <Settings2 className="h-4 w-4" />
          Season Theme
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        
        <div className="px-2 py-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="auto-detect" className="text-sm cursor-pointer">
              Auto-detect season
            </Label>
            <Switch
              id="auto-detect"
              checked={isAutoDetect}
              onCheckedChange={handleAutoDetectChange}
              aria-label="Auto-detect season based on current date"
            />
          </div>
        </div>
        
        <DropdownMenuSeparator />
        
        {(Object.keys(seasonThemes) as Season[]).map((s) => (
          <DropdownMenuItem
            key={s}
            onClick={() => handleSeasonChange(s)}
            className="flex items-center justify-between cursor-pointer"
            disabled={isAutoDetect}
          >
            <span className="flex items-center gap-2">
              {seasonIcons[s]}
              <span>{seasonThemes[s].name}</span>
            </span>
            {season === s && !isAutoDetect && (
              <Check className="h-4 w-4 text-primary" />
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
