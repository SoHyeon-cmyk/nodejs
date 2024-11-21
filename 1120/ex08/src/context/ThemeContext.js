//context를 사용하기 위해 createContext를 임포트
import { createContext } from "react";

//ThemeContext 컴포넌트에 createContext로 컨텍스트를 만들고 기본값을 null로 설정
export const ThemeContext = createContext(null);