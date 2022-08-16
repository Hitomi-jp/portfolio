import styles from "../styles/profile.module.css";
import Link from "next/link";
import utilStyles from "../styles/utils.module.css";
import { HomeOutlined } from "@ant-design/icons";

const Profile = () => {
  return (
    <div>
      <div className={styles.container}>
        <Link href='/'>
          <a className={utilStyles.font}>
            <HomeOutlined />
            Back to Home
          </a>
        </Link>
        <div className={utilStyles.info}>
          <p>Hitomi Schieloe</p>
          <dl>
            <dt>Født</dt>
            <dd>- 1977</dd>
            <dt>Utdannelse</dt>
            <dd>- OsloMet InfomasjonsTeknologi </dd>
            <dt>Jobb</dt>
            <dd>- IT-Support</dd>
          </dl>
          <br />
          <p>Om Hitomi</p>
          <p>
            Jeg kommer fra japan og flyttet norge i 2012. Jeg har arbeidet i IT
            bransjen i ca 5 år, hovedsakelig relatert til IT brukerstøtte, men
            nå leter jeg etter nye muligheter som utvikler. Fra denne
            arbeidserfaring, og gruppearbeid på OsloMET, har jeg blitt godt vant
            med å jobbe i team. Det er en stor glede for meg være en del av et
            team som skaper verdi vha teknologi og kunnskap. Jeg lærer fort og
            er god til å dele kunnskap jeg tilegner meg videre med andre.
          </p>
          <br />
          <dl>
            <dt>LinkedIn</dt>
            <dd className={utilStyles.linkedIn}>
              <a href='https://www.linkedin.com/in/hitomi-schiefloe-94672323/'>
                - Hitomi Schiefloe
              </a>
            </dd>
            <dt>GitHub</dt>
            <dd className={utilStyles.linkedIn}>
              <a href='https://github.com/Hitomi-jp'>
                - Hitomi Schiefloe (Hitomi-jp)
              </a>
            </dd>
            <br />
            <dt>Programming Språk</dt>
            <dd className={utilStyles.linkedIn}>- Java</dd>
            <dd className={utilStyles.linkedIn}>- JavaScript</dd>
            <dd className={utilStyles.linkedIn}>- C#</dd>
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Profile;
