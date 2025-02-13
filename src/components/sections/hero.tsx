import { Icons } from "@/icons"
import { useTranslation } from "react-i18next"
import RotatingText from "../rotating-text"
import StatusWork from "../status-work"

const Hero = () => {
  const { t } = useTranslation()
  const rotatingTexts: string[] = t("main.hero.rotating_texts", {
    returnObjects: true,
  }) as unknown as string[]

  return (
    <section>
      <div className="flex flex-col gap-2 ml:gap-6 sm:gap-4">
        <h1 className="pr-4 font-bold ml:text-5xl text-4xl leading-tight sm:pr-0 sm:leading-none">
          {t("main.hero.title")}
        </h1>
        <p className="ml:-mb-3 ml:w-[80%] ml:text-xl text-muted-foreground sm:w-[65%]">
          {t("main.hero.subtitle")}
          <RotatingText
            texts={rotatingTexts}
            mainClassName="inline-flex dark:bg-white bg-[hsl(0-0%-98%)] px-1 ml-2 rounded-sm"
            elementLevelClassName="dark:text-black text-white font-bold"
          />
        </p>
        <StatusWork isAvailable={true} />
        <div className="flex gap-4">
          <a
            href="/CV - Valentín Vera.pdf"
            download
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full bg-muted ml:px-8 px-6 ml:py-4 py-4 text-center font-medium ml:text-base text-secondary-foreground text-sm transition-colors hover:bg-muted/80 disabled:pointer-events-none disabled:opacity-50"
          >
            {t("main.hero.calls_to_actions.download_cv")}
            <Icons.download size={16} className="size-4" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full bg-primary ml:px-8 px-6 ml:py-4 py-4 font-medium ml:text-base text-primary-foreground text-sm transition-colors hover:bg-primary/90 disabled:pointer-events-none disabled:opacity-50"
          >
            {t("main.hero.calls_to_actions.get_in_touch")}
            <Icons.arrowRight size={16} className="size-4" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
