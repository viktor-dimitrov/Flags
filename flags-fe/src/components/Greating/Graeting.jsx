

import styles from './Greating.module.css';

export default function Greating ({accuracy}) {

    const AccuracyMessages = [
        { accuracy: 10, greating: "Don't give up! Keep trying." },
        { accuracy: 20, greating: "Tough try, but you can do more!" },
        { accuracy: 30, greating: "There's potential. Keep going!" },
        { accuracy: 40, greating: "Good effort, but room for improvement." },
        { accuracy: 50, greating: "Average performance. You can do better!" },
        { accuracy: 60, greating: "Good job! We see progress." },
        { accuracy: 70, greating: "Excellent! Keep it up." },
        { accuracy: 80, greating: "Great! A little more for perfection." },
        { accuracy: 90, greating: "Exceptional! Almost perfect." },
        { accuracy: 100, greating: "Perfect! You're a champion!" },
      ];

      const roundedAccuracy = Math.floor(accuracy / 10) * 10;
      const greetingMessage = AccuracyMessages.find(message => message.accuracy === roundedAccuracy);
   
    return (

        <>
        <p className={styles['greating']} >{greetingMessage ? greetingMessage.greating : ''}</p>
        </>
    )
}