import "./style.css";
import ListItem from "../../components/ListItem";
import Card from "./../../components/Card/index";
import BannerHeader from "../../components/BannerHeader";
import BannerServico from "../../components/BannerServico";
import { listItemData1, listCardData2 } from "./mock";
import Header from "../../components/Header";

const Home = () => {
  return (
    <body>
      <Header />
      <div className="banner">
        <BannerHeader
          title="TRAINING TO SUCCEED"
          subtitle="Believe and you can achieve"
          menssage=" Learn any skill from comfort of your home Anywhere and Anytime for
        only $10"
          nameButton="Apply Now"
          img="https://assets-global.website-files.com/5bcb46130508ef456a7b2930/601b6428833dd7cc96cfe751_love-and-family-card-image-export-v0.1.png"
        />
      </div>
      <ul className="servicos">
        {listItemData1.map((item) => (
          <ListItem title={item.title} subtitle={item.subtitle} />
        ))}
      </ul>
      <div className="card">
        <div className="card-desc-title">
          <h1>Featured Course</h1>
          <p>Everything you need to when you're looking</p>
        </div>

        <div className="card-imagem">
          {listCardData2.map((item) => (
            <Card
              imageGrande={item.imageGrande}
              title={item.title}
              subtitle={item.subtitle}
              value={item.value}
              imageHours={item.imageHours}
              hours={item.hours}
              imageArticles={item.imageArticles}
              articles={item.articles}
            />
          ))}
        </div>
      </div>

      <BannerServico
        subtitle="newsletter"
        title="Subscribe Our Newslette"
        typeEnter="Enter"
        placeholderEnter="enter you mail."
        servicoTitle="Why should I need your news letter"
        servicoMessage="Because we always want our student to be updated with latest
       information. 😊"
        typeMassage="Write message .."
        placeholderMessage="write message.."
      />
    </body>
  );
};

export default Home;
