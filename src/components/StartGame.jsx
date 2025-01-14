
import styled from 'styled-components';
import { Button } from '../styled/Button';

const StartGame = ({ toggle }) => {
  return (
    <Container>
        <div>
            <img src='/images/dice_png.png' />
        </div>

        <div className='content'>
            <h1>DICE GAME</h1>
            <Button onClick={toggle}>Play Now</Button>
        </div>
    </Container>

  )
}

export default StartGame


const Container = styled.div`
    max-width: 1180px;
    display: flex;
    align-items: center;
    margin: 0 auto;
    height: 100vh;

    .content {
        display: flex;
        flex-direction: column;
        h1 {

            font-size: 85px;
            white-space: nowrap;
        }
    }

`;











