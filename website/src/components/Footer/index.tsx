
import emil from './emil.jpeg';
import riccardo from './ric.jpg';
import styles from './footer.module.css';

export const Footer = () => {
  return (
    <footer class={styles.wrapper}>
      <div class="container">
        <p class={styles.p}>
          <img alt="Riccardo's profile picture" src={riccardo} height={24} width={24} />
          <span>
            Made by{' '}
            <a href="https://twitter.com/riccardiin0" target="_blank">
              Riccardo.
            </a>
          </span>
          <img alt="Emil's profile picture" src={emil} height={24} width={24} />
          <span>
            Inspired by{' '}
            <a href="https://twitter.com/emilkowalski_" target="_blank">
              Emil.
            </a>
          </span>
        </p>
      </div>
    </footer>
  );
};
