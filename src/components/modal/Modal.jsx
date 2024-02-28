import React from 'react'
import './Modal.css'

const Modal = ({ correctAnswers, wrongAnswers, userAnswers }) => {
    return (
        <div className='modal'>
            <div className='modal-title'>
                <strong>Tebrikler Test Bitti  🎉</strong>
            </div>
 
            <div className="modal-results">
                Doğru cevap sayısı: {correctAnswers} ✅ <br />
                Yanlış cevap sayısı: {wrongAnswers}  ❌
            </div>

            <div className="modal-answers">
                <h3>Cevaplarınız:</h3>
                <ul>
                    {userAnswers.map((answer, index) => (
                        <li key={index} className={answer.isCorrect ? 'correct-answer' : 'wrong-answer'}>
                            Soru {index + 1}: {answer.isCorrect ? 'Doğru✅' : `Yanlış❌ (✔Doğru cevap: ${answer.correctAnswer})`}
                        </li>
                    ))}
                </ul>
            </div>

            <div onClick={() => window.location = "/"} className='modal-btn'>
                Yeniden Başla
            </div>
        </div>
    );
};

export default Modal;
