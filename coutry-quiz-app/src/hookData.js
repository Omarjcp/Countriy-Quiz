// import { useState } from "react";
// import axios from "axios";

// export async function useGetData() {
//   try {
//     const [isFlagAsk, setIsFlagAsk] = useState(false);
//     const [answersCorrects, setAnswersCorrects] = useState(0);
//     const [failQuestion, setFailQuestion] = useState(false);
//     const [isSelectedAOption, setIsSelectedAOption] = useState(false);
//     const [capitalCurrent, setCapitalCurrent] = useState("Buenos aires");

//     const { data } = await axios("https://restcountries.com/v2/all");
//     // console.log(data[0].capital);

//     return data;
//   } catch (err) {
//     console.log(err);
//   }
// }
