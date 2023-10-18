import { Flex } from "@adobe/react-spectrum";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  padding: 16px;
`

export const CalendarContainer = styled.div`
    width: 100%;
    display: flex;
    overflow-x: scroll;
    flex-direction: column;
    border: ${theme => theme.theme.border};
    border-radius: 8px;
`

export const CalendarMonths = styled.div`
    display: flex;
    width: max-content;
`

export const CalendarMonthsContainer = styled.div`
    width: max-content;
    display: flex;
    flex-direction: column;
`

export const CalendarMonthUnity = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 56px;
    border-right: ${theme => theme.theme.border};
`

export const CalendarDaysOfMonthContainer = styled.div`
    width: 100%;
    display: flex;
    border-bottom: ${theme => theme.theme.border};
    border-right: ${theme => theme.theme.border};
    font-size: 0.75rem;
    line-height: 1rem;
`

export const CalendarDayUnity = styled.div`
    width: 58px;
    min-width: 58px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.75rem;
    line-height: 1rem;
    border-right: ${theme => theme.theme.border};

    &:last-child {
        border-right: none;
    }
    #isFirst {
        border-top-left-radius: 8px;
        border-bottom-left-radius: 8px;
        margin-left: 6px;
    }
    .isLast {
        border-top-right-radius: 8px;
        border-bottom-right-radius: 8px;
        margin-right: 6px;
    }
`

export const CalendarDayNumber = styled.span`
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    /* border-radius: 8px;
    background: ${theme => theme.theme.foreground}; */
`

export const CalendarDayBoard = styled.div`
    width: 58px;
    min-width: 58px;
    border-right: ${theme => theme.theme.border};
    z-index: 40;
    display: flex;
    flex-direction: column;
   
`
export const CalendarDay = styled.div`
    width: 58px;
    height: 90%;
    z-index: 50;
    background-color: ${theme => theme.theme.primary};
    display: flex;
    justify-content: center; 
`

export const SelectedProjectContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 300px;
    border: ${theme => theme.theme.border};
`

export const SelectedProjectHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 96px;
    border-bottom: ${theme => theme.theme.border};
`

export const ListDeliveries = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`

export const DeliveryInformations = styled.div`
    width: 100%;
    border-bottom: ${theme => theme.theme.border};
    display: flex;
    justify-content: center;
    align-items: center;
`