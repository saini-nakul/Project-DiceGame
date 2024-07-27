import styled from "styled-components"

const Rules = () => {
  return (
    <RulesContainer>
        <h2>How to play Dice Game:</h2>
        <div className="text">
            <ul>
                <li>Select any number.</li>
                <li>Click on the dice image</li>
                <li>After you click on the dice, if the selected number = the dice number, you will get the same points as the dice number.</li>
                <li>If you guess wrong, 2 points will be deducted.</li>
            </ul>
        </div>
    </RulesContainer>
  )
}

export default Rules


const RulesContainer = styled.div`

    background-color: #fbf1f1;
    padding: 20px;
    margin-top: 40px;
    max-width: 800px;
    margin: 0 auto;
    margin-top: 50px;
    border-radius: 10px;

    h2 {
        font-size: 24px;
        font-weight: bold;
    }

    .text {
        margin-top: 24px;
    }


`;
