import styled, {keyframes} from 'styled-components';

export const Container = styled.div`

`;

export const Label = styled.label`
    font-size: 14px;
    color: #999;
`;

export const TextTerm = styled.h2`
    margin-top: 50px;
    margin-bottom: 20px;
    opacity: 0;
    transition: opacity .5s;

    &.show {
        opacity: 1;
    }
`;

export const Results = styled.div`
    display: grid;
    flex-wrap: wrap;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    grid-gap: 20px;

    .item {
        max-width: 150px;
        text-align: center;
        margin-bottom: 15px;
        cursor: pointer;
        justify-self: center;

        &:hover .box-img img {
            transform: scale(1.1);
        }

        &.loading {
            .box-img {
                background-color: #d2d2d2;
            }
            span {
                background-color: #d2d2d2;
                height: 20px;
                margin-bottom: 10px;
            }
        }

        .box-img {
            width: 150px;
            height: 150px;
            background-color: #fafafa;
            margin: 0 auto 15px;

            img {
                width: 100%;
                transition: all .2s;
            }
        }

        span {
            display: block;

            &:last-child {
                color: #999;
            }
        }
    }
`;







