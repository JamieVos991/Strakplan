import "./Upcoming.css";
import ScrollReveal from "../Scrollreveal";

function Upcoming() {
  return (
    <>
      <section className="section-upcoming">
        <section className="section-upcoming-a">
          <div className="text-upcoming">
            <p className="p-upcoming-1">Our story</p>
            <p className="p-upcoming-2">
              <ScrollReveal
                baseOpacity={0}
                enableBlur={true}
                baseRotation={0}
                blurStrength={10}
              >
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                nulla iusto dolorem, tempore ipsum ullam, odit odio tempora
                eaque animi incidunt, provident accusamus commodi minima
                asperiores quasi. Laudantium, repudiandae eligendi. Lorem ipsum
                dolor sit amet consectetur, adipisicing elit. Delectus ad
                doloremque eveniet molestiae nobis maiores, aperiam eius quaerat
                quos voluptas, error laboriosam, perferendis numquam quo ipsam
                ducimus! Dolorem, aut fugit."
              </ScrollReveal>
            </p>
          </div>
        </section>
        <section className="section-upcoming-b"></section>
      </section>
    </>
  );
}

export default Upcoming;
