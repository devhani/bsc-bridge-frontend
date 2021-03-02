import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import SelectToken from './components/SelectToken';
import InputAmount from './components/InputAmount';
import Footer from '../../components/Footer';
import WalletProviderPopup from '../../components/Popup/WalletProvider';
import useWalletPopup from '../../hooks/useWalletPopup';

const MainDiv = styled.div`
  max-width: 600px;
  margin: 0 auto 0;
  display: flex;
  flex-direction: column;
  position: relative;
  text-align: left;
  justify-content: center;
`;

const RecordDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 600px;
  padding: .8rem 1rem;
  margin: 0 auto 0;
  border-radius: 15px;
  background-color: #45474e;

  .record-info {
    display: flex;
    align-items: center;

    .coin-type {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      overflow: hidden;
      background-color: #000;

      &.origin {
        background-color: #fff;
      }
    }

    .material-icons {
      margin: 0 6px;
      font-size: 24px;
      color: #F7CD2A;
    }

    &-coins {
      padding-left: 10px;

      h3, p {
        margin: 0;
      }

      h3 {
        padding-bottom: 15px;
        font-size: 15px;
        color: #fff;

        span {
          display: inline-block;
          vertical-align: middle;

          &.coin {
            margin-right: .3rem;
          }
        }
      }

      p {
        font-size: 13px;
        color: #F7CD2A;
      }
    }
  }

  .js-recieve {
    border-radius: 15px;
    border: 0;
    padding: .5rem 1rem;
    color: skyblue;
    background-color: #2e383a;
    cursor: pointer;
    
    &:hover {
      color: #F7CD2A;
    }
  }
`;

const SwapDiv = styled.div`
  padding-bottom: 130px;
  b {
      font-size: 20px;
  }
  
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    
    li {
      padding-bottom: 10px;
    }
  }
`;

const FlexDiv = styled.div`
  display: flex;
  width: 600px;
  margin-top: 10px;
  margin-bottom: 10px;
  > *:first-child {
    margin-right: 10px;
  }
`;

const Button = styled.button`
  -webkit-box-align: center;
  align-items: center;
  width: 50%;
  background-color: #F0B90B;
  border: 2px solid #F0B90B;
  color: #212833;
  cursor: pointer;
  font-size: 14px;
  font-weight: 700;
  height: 36px;
  -webkit-box-pack: center;
  justify-content: center;
  outline: none;
  background-image: linear-gradient(180deg,#F8D12F 0%,#F0B90B 100%);
  text-overflow: ellipsis;
  white-space: nowrap;
`;

function Main(props) {
    const {walletPopup} = useWalletPopup();
    return (
        <MainDiv>
          <SwapDiv>
            <b>ERC20 {'->'} BEP20</b>
            <FlexDiv>
              <SelectToken/>
              <InputAmount/>
            </FlexDiv>
            <FlexDiv>
              <Button>Approve</Button>
              <Button>Transit to BSC Network</Button>
            </FlexDiv>
          </SwapDiv>
          <SwapDiv>
            <b>BEP20 {'->'} ERC20</b>
            <FlexDiv>
              <SelectToken/>
              <InputAmount/>
            </FlexDiv>
            <FlexDiv>
              <Button>Approve</Button>
              <Button>Transit to Ethereum Network</Button>
            </FlexDiv>
          </SwapDiv>
          <SwapDiv>
              <b>Transit Records</b>

              <ul>
                  <li>
                      <RecordDiv>
                          <div className="record-info">
                              <div className="coin-type origin"><img alt="origin" src="" /></div>
                              <span className="material-icons">arrow_forward</span>
                              <div className="coin-type transit"><img alt="trnsit" src="" /></div>
                              <div className="record-info-coins">
                                  <h3>
                                      <span className="coin">10</span>
                                      <span className="unit">bSUSHI</span>
                                  </h3>
                                  <p>
                                      Copy contract address
                                  </p>
                              </div>
                          </div>
                          <button type="button"
                                  className="btn js-recieve">
                              <span>Recieve</span>
                          </button>
                      </RecordDiv>
                  </li>

                  <li>
                      <RecordDiv>
                          <div className="record-info">
                              <div className="coin-type origin"><img alt="origin" src="" /></div>
                              <span className="material-icons">arrow_forward</span>
                              <div className="coin-type transit"><img alt="trnsit" src="" /></div>
                              <div className="record-info-coins">
                                  <h3>
                                      <span className="coin">10</span>
                                      <span className="unit">bSUSHI</span>
                                  </h3>
                                  <p>
                                      Copy contract address
                                  </p>
                              </div>
                          </div>
                          <button type="button"
                                  className="btn js-recieve">
                              <span>Recieve</span>
                          </button>
                      </RecordDiv>
                  </li>
              </ul>

          </SwapDiv>
            {walletPopup && <WalletProviderPopup/>}
          <Footer/>
        </MainDiv>
    );
}

export default Main;
