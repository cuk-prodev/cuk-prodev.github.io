import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <section className="pb-8 pt-20 dark:bg-dark lg:pb-[70px] lg:pt-[120px]">
      <div className="container">
        <SectionTitle
          subtitle="Fitur"
          title="Fitur Utama dari CUK PRODEV"
          paragraph="Temukan fitur inti yang membuat Play menjadi cepat, powerful, dan siap untuk pengembangan modern. Dari performa hingga desain, semuanya dirancang untuk membantu Anda membangun produk dengan lebih baik dan lebih cepat."
        />

        <div className="-mx-4 mt-12 flex flex-wrap lg:mt-20">
          {featuresData.map((feature, i) => (
            <SingleFeature key={i} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
