import Button from "../components/Button/Button";
import { useCharacterAnimations } from "../contexts/CharacterAnimations";
import styles from "./Interface.module.css";

const Interface = () => {
  const { animations, animationIndex, setAnimationIndex } = useCharacterAnimations();


  return (
    <div className={styles.page}>
      <div className={styles.btns}>
        {animations.map((animation, index) => (
          <Button
            key={animation}
            isDisable={index === animationIndex}
            onClick={() => setAnimationIndex(index)}>
            {animation}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Interface;