import React from 'react'
import './introduce.css'
import { useNavigate } from 'react-router-dom';

const Introduce = () => {
    const navigate = useNavigate();
    const startQuiz = () => {
        navigate("/quiz");
    }

    return (
        <div className='introduce'>
            <div className="introduce-container">
            <img width="220px" src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWl1cXR3YWVhN2R3bTM4eWdraDViMXVjNmFxeDlybXR2aXZ5ODZwcyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/QVmrpMHAPYyYsd9z2b/giphy.gif" alt="Quiz Image"/>
                <div className="quiz-info">
                    
                    <strong>HAZIRMISIN?</strong> <br/> Bilgilerinizi test etmek için 10 zorlayıcı soru ile bilgi seviyenizi ölçün.<br></br> Her soru için 30 saniye süreniz bulunmaktadır.

                </div>
                <div id="start" onClick={startQuiz} className='introduce-btn'>Teste başla</div>
            </div>
        </div>
    )
}

export default Introduce
