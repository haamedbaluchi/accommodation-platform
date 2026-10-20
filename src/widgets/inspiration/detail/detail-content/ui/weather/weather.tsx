interface WeatherProps {
  title?: string;
  text: string;
}

export function Weather({
  data,
}: {
  data: WeatherProps;
}) {
  return (
    <section className="border-b border-gray-200 py-5">
      <h2 className="mb-1 lg:mb-2 text-base lg:text-xl font-black text-text-main">
        {data.title ?? '🌤 آب‌وهوا و طبیعت'}
      </h2>

      <p className="text-[13px] lg:text-sm font-medium leading-7 text-text-foreground">
        {data.text}
      </p>
    </section>
  );
}
