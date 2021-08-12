import styled from "styled-components";
import { ButtonActionTableProps } from "../interfaces";

export const ContentTable = styled.div`
  overflow: auto;
  margin-bottom: 30px;
`;

export const TableUsers = styled.table`
  width: 100%;
	border-collapse: collapse;
	border-radius: 8px;
	overflow: auto;

	thead {
		th {
			background-color: #767676;
			line-height: 22px;
			font-weight: 600;
			color: #f2f2f2;
			text-transform: uppercase;
			padding: 9px 15px;
			text-align: left;
			min-width: 100px;
		}
	}

	tbody {
		tr {
			&:nth-child(even) {
				td {
					background-color: #f2f2f2;
					min-width: 100px;
				}
			}
		}

		td {
			background-color: #f5f5f5;
			padding: 20px 15px;
			color: #767676;
			font-size: 14px;
			line-height: 19px;

			img {
				height: 45px;
				width: 45px;
				margin: 0 auto;
				display: block;
			}
		}
	}
`;

export const ButtonAddNew = styled.a`
  display: flex;
  align-self: center;
  text-decoration: none;
  color: transparent;

  @media(min-width: 768px) {
    align-self: flex-end;
  }
`;

export const ContentTableActions = styled.div`
	display: flex;
	justify-content: space-around;
`;

export const ButtonActionTable = styled.button<ButtonActionTableProps>`
	display: flex;
	align-items: center;
	justify-content: center;
  border: 0;
  background: transparent;
  box-sizing: border-box;
  text-align: center;
	font-size: 14px;
	line-height: 19px;
	color: ${props => props.red ? '#FF6969' : '#1D5840'};

	> svg {
		margin-right: 5px;
	}
`;

export const ContentButtonEdit = styled.a`
	text-decoration: none;
`;

export const EmptyUsers = styled.div`
	text-align: center;
	font-weight: 600;
`;