import Card from "@/components/Recent-post-card";
import Image from "next/image";
export default function Home() {
  return (
    <>
      <section className="hero-section">
        <div className="section">
          <div className="main-sec">
            <div className="text-sec">
              <h1 className="main-text">
                Hi, I am John, Creative Technologist
              </h1>
              <p className="main-para">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
              <button className="resume-btn">Download Resume</button>
            </div>
            <div>
              <div>
                <Image
                  src="/person1.png"
                  width={300}
                  height={300}
                  alt="person"
                ></Image>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="recent-post">
        <div className="section">
          <div className="main">
            <div className="recent-post-text">
              <h3>Recent Post</h3>
              <button className="veiw-all-btn">Veiw All</button>
            </div>
            <div className="card-parent">
              <Card />
              <Card />
            </div>
          </div>
        </div>
      </section>

      <section className="featured-section">
        <div className="section">
          <div className="main">
            <div className="featured-heading">
              <h3>Featured Works</h3>
            </div>

             <div className="card-parent">
             <div className="card">
              <Image
                src="/design-img.png"
                width={245}
                height={180}
                alt=""
              ></Image>
              <div className="card-content">
                <h2>Designing Dashboards</h2>
                <div className="badge-parent">
                  <div className="badge">
                    <p>2020</p>
                  </div>
                   <p>Dashboard</p>
                </div>
                <p>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </p>
              </div>
            </div>

            <div className="card">
              <Image
                src="/design-img2.png"
                width={245}
                height={180}
                alt=""
              ></Image>
              <div className="card-content">
                <h2>Designing Dashboards</h2>
                <div className="badge-parent">
                  <div className="badge">
                    <p>2020</p>
                  </div>
                   <p>Dashboard</p>
                </div>
                <p>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </p>
              </div>
            </div>

            <div className="card">
              <Image
                src="/design-img3.png"
                width={245}
                height={180}
                alt=""
              ></Image>
              <div className="card-content">
                <h2>Designing Dashboards</h2>
                <div className="badge-parent">
                  <div className="badge">
                    <p>2020</p>
                  </div>
                   <p>Dashboard</p>
                </div>
                <p>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </p>
              </div>
            </div>
             </div>
          
          </div>
        </div>
      </section>
    </>
  );
}
