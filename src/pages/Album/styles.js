import styled from 'styled-components';

export const TrackList = styled.section`
  li {
    display: flex;
    align-items: center;
    padding: 10px;
    cursor: pointer;

    &:hover {
      background: #282828;
    }

    &.disabled {
      opacity: .5;
      cursor: not-allowed;
    }

    &.active {
      background: #282828;

      .track-icon svg,
      .track-name,
      .track-duration {
        color: #1ed760;
      }
    }

    .track-icon {
      display: flex;
      font-size: 20px;
      padding: 0 10px;
    }

    .track-name {
      flex: 1;
    }
  }
`;
