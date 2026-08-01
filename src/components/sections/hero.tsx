import { useTranslation } from "react-i18next"

const Hero = () => {
  const { t } = useTranslation()

  return (
    <section className="pb-20 md:pt-12 lg:pt-16">
      <div className="flex flex-col gap-2 ml:gap-6 sm:gap-4">
        <h1 className="font-bold ml:text-5xl text-4xl leading-tight sm:pr-0 sm:leading-none">
          {t("main.hero.title")}
        </h1>
        <div className="ml:-mb-3 ml:w-[80%] ml:text-xl text-muted-foreground sm:w-[65%]">
          {t("main.hero.subtitle")}
        </div>
      </div>
    </section>
  )
}

export default Hero
