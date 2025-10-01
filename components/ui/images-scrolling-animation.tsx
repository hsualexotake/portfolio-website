"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { FiArrowUpRight } from "react-icons/fi"
import Image from "next/image"

const SCROLL_ANIMATION_CONFIG = {
  STICKY_TOP_OFFSET: 80,
  CARD_Y_TRANSLATION: -120,
  CARD_SPACING_MULTIPLIER: 22,
  CARD_BASE_OFFSET: 100,
  MIN_SCALE: 0.92,
  SCALE_DECREMENT_PER_CARD: 0.02,
  SCROLL_RANGE_START_MULTIPLIER: 0.10,
  SCROLL_RANGE_END_CAP: 0.5,
} as const

interface ExperienceCardData {
  company: string
  title: string
  year: string
  description: string
  date: string
  color: string
  textColor: string
  imageUrl: any
}

const ExperienceCard = ({
  i,
  company,
  title,
  year,
  color,
  textColor,
  imageUrl,
  progress,
  range,
  targetScale,
  totalCards,
}: {
  i: number
  company: string
  title: string
  year: string
  color: string
  textColor: string
  imageUrl: any
  progress: any
  range: [number, number]
  targetScale: number
  totalCards: number
}) => {
  const container = useRef<HTMLDivElement>(null)
  const scale = useTransform(progress, range, [1, targetScale])

  // Add translateY to push cards upward as we scroll
  const y = useTransform(
    progress,
    [range[0], range[1]],
    [0, SCROLL_ANIMATION_CONFIG.CARD_Y_TRANSLATION]
  )

  return (
    <div
      ref={container}
      className="sticky flex items-center justify-center px-4 sm:px-6 lg:px-8"
      style={{ top: `${SCROLL_ANIMATION_CONFIG.STICKY_TOP_OFFSET}px` }}
    >
      <motion.div
        style={{
          scale,
          y,
          top: `calc(-5vh + ${i * SCROLL_ANIMATION_CONFIG.CARD_SPACING_MULTIPLIER + SCROLL_ANIMATION_CONFIG.CARD_BASE_OFFSET}px)`,
          zIndex: totalCards - i,
          backgroundColor: color,
        }}
        className="rounded-lg lg:rounded-xl relative -top-1/4 flex origin-top flex-col overflow-hidden
                   h-[400px] w-[355px]
                   sm:h-[450px] sm:w-[630px]
                   md:h-[500px] md:w-[810px]
                   lg:h-[600px] lg:w-[1090px]
                   xl:h-[700px] xl:w-[1270px]
                   shadow-2xl"
      >
        {/* Text content section */}
        <div className="relative z-10 pt-3 pl-2 pr-6 pb-8 sm:pt-4 sm:pl-3 sm:pr-8 sm:pb-10 md:pt-5 md:pl-4 md:pr-10 md:pb-12 lg:pt-6 lg:pl-6 lg:pr-12 lg:pb-14">
          {/* Top section with year and title */}
          <div className="flex items-start justify-between mb-1 sm:mb-2 md:mb-3">
            <span className="font-[family-name:var(--font-mono)] font-normal text-xs sm:text-sm" style={{ color: textColor }}>{year}</span>
            <div className="flex items-center gap-1.5">
              <span className="font-[family-name:var(--font-mono)] text-xs sm:text-sm font-normal" style={{ color: textColor, opacity: 0.8 }}>{title}</span>
              <FiArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: textColor }} />
            </div>
          </div>

          {/* Company name */}
          <div>
            <h2 className="font-[family-name:var(--font-display)] font-medium text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight" style={{ color: textColor, letterSpacing: '-0.05em' }}>
              {company}
            </h2>
          </div>
        </div>

        {/* Divider line */}
        <div className="absolute left-2 right-2 sm:left-3 sm:right-3 md:left-4 md:right-4 lg:left-6 lg:right-6 border-t border-gray-300 z-20"
             style={{ top: 'calc(20% - 1px)' }} />

        {/* Image section - extends to bottom with sharp edges */}
        <div className="absolute top-[22%] bottom-2 left-2 right-2 sm:bottom-3 sm:left-3 sm:right-3 md:bottom-4 md:left-4 md:right-4 lg:bottom-6 lg:left-6 lg:right-6 z-0">
          <Image
            src={imageUrl}
            alt={company}
            fill
            className="object-cover"
          />
        </div>
      </motion.div>
    </div>
  )
}

const ExperienceScrollingAnimation = ({
  experiences,
}: {
  experiences: ExperienceCardData[]
}) => {
  const container = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  })

  return (
    <main
      ref={container}
      className="relative flex w-full flex-col items-center justify-center
                 pb-[10vh] pt-[5vh]
                 sm:pb-[15vh] sm:pt-[8vh]
                 lg:pb-[20vh] lg:pt-[10vh]"
    >
      {experiences.map((experience, i) => {
        const targetScale = Math.max(
          SCROLL_ANIMATION_CONFIG.MIN_SCALE,
          1 - (experiences.length - i - 1) * SCROLL_ANIMATION_CONFIG.SCALE_DECREMENT_PER_CARD
        )
        const rangeStart = i * SCROLL_ANIMATION_CONFIG.SCROLL_RANGE_START_MULTIPLIER
        const rangeEnd = Math.min(rangeStart + SCROLL_ANIMATION_CONFIG.SCROLL_RANGE_END_CAP, 1)
        return (
          <ExperienceCard
            key={`experience_${i}`}
            i={i}
            company={experience.company}
            title={experience.title}
            year={experience.year}
            color={experience.color}
            textColor={experience.textColor}
            imageUrl={experience.imageUrl}
            progress={scrollYProgress}
            range={[rangeStart, rangeEnd]}
            targetScale={targetScale}
            totalCards={experiences.length}
          />
        )
      })}
    </main>
  )
}

export { ExperienceScrollingAnimation, ExperienceCard }