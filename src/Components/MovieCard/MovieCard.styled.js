import styled from 'styled-components'

export const MovieContainer = styled.div`
  position: relative;
  width: 20rem;
  height: 25rem;
  overflow: hidden;

  &:hover > div {
    opacity: 1;
    transform: translateY(0);
  }
`

export const MoviePoster = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
`

export const MovieTitle = styled.h2`
  margin-top: 1rem;
  font-size: 2rem;
  font-family: monospace;
  font-style: italic;
`
export const MovieOverlay = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 50%;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  text-align: center;
  opacity: 0;
  transform: translateY(100%);
  transition: all 0.3s ease-in-out;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`

export const MovieSynopsys = styled.p`
  margin: 0;
  padding: 5px;
  width: 100%;
  font-size: clamp(10px, 2vw, 16px);
  font-family: Montserrat;
  line-height: 1.2;
  overflow: hidden;
  text-overflow: ellipsis;
`
