import SectionTitle from "../../Common/SectionTitle";
import SingleFeature from "../SingleFeature";
import projectData from "../projectData";

const Project = () => {
  console.log(projectData);
  return (
    <section className="pb-8 pt-20 dark:bg-dark lg:pb-[70px] lg:pt-[120px]">
      <div className="container">
        {/* <SectionTitle
          subtitle="Project"
          title="Beberapa Project yang Pernah Dikerjakan"
          paragraph="Berikut adalah kumpulan proyek aplikasi dan sistem yang telah saya kerjakan, baik untuk kebutuhan pribadi, klien, maupun perusahaan."
        /> */}

        <div className="-mx-4 mt-12 flex flex-wrap lg:mt-20">
          {projectData.map((project:any, i:any) => (
            <SingleFeature key={i} feature={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
