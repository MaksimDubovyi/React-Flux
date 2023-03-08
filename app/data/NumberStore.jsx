import { ReduceStore } from "flux/utils";
import NumberDispatcher from "./NumberDispatcher.jsx";

class NumberStore extends ReduceStore {
    constructor() {
        super(NumberDispatcher);
    }
    getInitialState() {
        let str="";
        return str;
    }

    reduce(state, action) {

        let result=0;
        let number1=0;
        let count=0;

        const ar =[];
        const one = ['нуль','один','два','три','чотири','пять','шість','сім','вісім','девять'];  
        const one2 =  ["","одина","дві","три","чотири","п'ять","шість","сім","вісім","дев'ять"];
        const ten =  ["десять","одинадцять","дванадцять","тринадцять","чотирнадцять","п'ятнадцять","шістнадцять","сімнадцять","вісімнадцять","дев'ятнадцять"];
        const ten2 =  ["","десять","двадцять","тридцять","сорок","п'ятдесят","шістдесят","сімдесят","вісімдесят","дев'яносто"];
        const other =  ["","","двадцять","тридцять","сорок","п'ятдесят","шістдесят","сімдесят","вісімдесят","дев'яносто"];
        const hundred = ["","сто","двісті","триста","чотириста","п'ятсот","шістсот","сімсот","вісімсот","дев'ятсот"];
        const thousand = ["","одна тисяча","дві тисячі","три тисячі","чотири тисячі","п'ять тисяч","шість тисяч","сім тисяч","вісім тисяч","дев'ять тисяч","десять тисяч"];
        const million="один мільйон";
        const tsT="тисяч";
        if (action.text) {
            let number  = new Number(action.text);
            while (number > 0)
                {
                 number1 = parseInt(number) % 10;
                 number =  parseInt(number) / 10;
                 if(number!=0)
                 {
                 ar.unshift(number1);
                 count++;
                 }
               }

               if( count==0)
               result= one[0]; 
               else if( count==1)
               result= one[ar[0]];

               else if( count==2&&ar[0]==1)
               result= ten[ar[1]];
               else if( count==2&&ar[0]==1)
               result= one[ar[1]];
               else if( count==2&&ar[0]!=1)
               result= other[ar[0]]+" "+one[ar[1]];
     
               else if( count==3&&ar[1]==0&&ar[2]==0)
               result= hundred[ar[0]];
               else if( count==3&&ar[1]==0)
               result= hundred[ar[0]]+" "+one[ar[2]];
               else if(count==3&&ar[1]==1)
               result= hundred[ar[0]]+" "+ten[ar[2]];
               else if(count==3&&ar[1]!=1)
               result= hundred[ar[0]]+" "+other[ar[1]]+" "+one[ar[2]];

                        else if( count==4&&ar[1]==0&&ar[2]==0&&ar[3]==0)
                         result= thousand[ar[0]];
                         else if( count==4&&ar[1]==0&&ar[2]==0&&ar[3]!=0)
                         result= thousand[ar[0]]+" "+one[ar[3]];
                         else if( count==4&&ar[1]==0&&ar[2]==1)
                         result= thousand[ar[0]]+" "+ten[ar[3]];
                         else if( count==4&&ar[1]==0&&ar[3]==0)
                         result= thousand[ar[0]]+" "+ten[ar[2]];
                         else if( count==4&&ar[1]==0&&ar[3]!=0)
                         result= thousand[ar[0]]+" "+other[ar[2]]+" "+one[ar[3]];
                         else if( count==4&&ar[2]==0&&ar[3]==0)
                         result= thousand[ar[0]]+" "+hundred[ar[1]];
                         else if( count==4&&ar[2]==1)
                         result= thousand[ar[0]]+" "+hundred[ar[1]]+" "+ten[ar[3]];
                         else if( count==4)
                         result= thousand[ar[0]]+" "+hundred[ar[1]]+" "+other[ar[2]]+" "+one[ar[3]];

                         if( count==5&&ar[0]==1)
                         {
                            if(ar[4]!=0)
                         result= ten[ar[1]]+" "+tsT+" "+hundred[ar[2]]+" "+ten2[ar[3]]+" "+one[ar[4]];
                         else
                         result= ten[ar[1]]+" "+tsT+" "+hundred[ar[2]]+" "+ten2[ar[3]];
                         state=result;   
                         return state;
                         }

                         else if( count==5&&ar[1]==0&&ar[2]==0&&ar[3]==0&&ar[4]==0)
                         result= ten2[ar[0]]+" "+tsT;
                         else if( count==5&&ar[1]==0&&ar[2]==0&&ar[3]==0&&ar[4]!=0)
                         result= ten2[ar[0]]+" "+tsT+" "+one[ar[4]];
                         else if( count==5&&ar[1]==0&&ar[2]==0&&ar[3]==1&&ar[4]==0)
                         result= ten2[ar[0]]+" "+tsT+" "+ten[ar[4]];
                         else if( count==5&&ar[1]==0&&ar[2]==0&&ar[3]==1&&ar[4]!=0)
                         result= ten2[ar[0]]+" "+tsT+" "+ten[ar[4]];
                         else if( count==5&&ar[1]==0&&ar[3]==0&&ar[4]==0)
                         result= ten2[ar[0]]+" "+tsT+" "+hundred[ar[2]];
                         else if( count==5&&ar[1]==0&&ar[3]==0&&ar[4]!=0)
                         result= ten2[ar[0]]+" "+tsT+" "+hundred[ar[2]]+" "+one[ar[4]];
                         else if( count==5&&ar[1]==0&&ar[3]==1&&ar[4]!=0)
                         result= ten2[ar[0]]+" "+tsT+" "+hundred[ar[2]]+" "+ten[ar[4]];
                         else if( count==5&&ar[1]==0&&ar[3]!=0&&ar[4]==0)
                         result= ten2[ar[0]]+" "+tsT+" "+hundred[ar[2]]+" "+ten2[ar[3]];
                         else if( count==5&&ar[1]==0&&ar[3]!=0&&ar[4]!=0)
                         result= ten2[ar[0]]+" "+tsT+" "+$undred[ar[2]]+" "+other[ar[3]]+" "+one[ar[4]];
                         else if( count==5&&ar[1]!=0&&ar[2]==0&&ar[3]==0&&ar[4]==0)
                         result= ten2[ar[0]]+" "+one2[ar[1]] +" "+tsT;
                         else if( count==5&&ar[1]!=0&&ar[2]==0&&ar[3]==0&&ar[4]!=0)
                         result= ten2[ar[0]]+" "+one2[ar[1]]+" "+tsT+" "+one[ar[4]];
                         else if( count==5&&ar[1]!=0&&ar[2]==0&&ar[3]!=0&&ar[4]==0)
                         result= ten2[ar[0]]+" "+one2[ar[1]]+" "+tsT+" "+ten2[ar[3]];
                         else if( count==5&&ar[1]!=0&&ar[2]==0&&ar[3]==1&&ar[4]!=0)
                         result= ten2[ar[0]]+" "+one2[ar[1]]+" "+tsT+" "+ten[ar[4]];
                         else if( count==5&&ar[1]!=0&&ar[2]==0&&ar[3]!=1&&ar[4]!=0)
                         result= ten2[ar[0]]+" "+one2[ar[1]]+" "+tsT+" "+other[ar[3]]+" "+one[ar[4]];
                         else if( count==5&&ar[1]!=0&&ar[2]==0&&ar[3]!=1&&ar[4]!=0)
                         result= ten2[ar[0]]+" "+one2[ar[1]]+" "+tsT+" "+other[ar[3]]+" "+one[ar[4]];
                         else if( count==5&&ar[1]!=0&&ar[2]!=0&&ar[3]==0&&ar[4]==0)
                         result= ten2[ar[0]]+" "+one2[ar[1]]+" "+tsT+" "+hundred[ar[2]];
                         else if( count==5&&ar[1]!=0&&ar[2]!=0&&ar[3]==0&&ar[4]!=0)
                         result= ten2[ar[0]]+" "+one2[ar[1]]+" "+tsT+" "+hundred[ar[2]]+" "+one[ar[4]];
                         else if( count==5&&ar[1]!=0&&ar[2]!=0&&ar[3]!=0&&ar[4]==0)
                         result= ten2[ar[0]]+" "+one2[ar[1]] +" "+tsT+" "+hundred[ar[2]]+" "+ten2[ar[3]];
                         else if( count==5&&ar[1]!=0&&ar[2]!=0&&ar[3]!=0&&ar[4]!=0)
                         result= ten2[ar[0]]+" "+one2[ar[1]] +" "+tsT+" "+hundred[ar[2]]+" "+ten2[ar[3]]+" "+one[ar[4]];


                         if( count==6&&ar[1]==0&&ar[2]==0&&ar[3]==0&&ar[4]==0&&ar[5]==0)
                         result= hundred[ar[0]]+" "+tsT;
                         if( count==6&&ar[1]==0&&ar[2]==0&&ar[3]==0&&ar[4]==0&&ar[5]!=0)
                         result= hundred[ar[0]]+" "+tsT+" "+one[ar[5]];
                         if( count==6&&ar[1]==0&&ar[2]==0&&ar[3]==0&&ar[4]!=0&&ar[5]==0)
                         result= hundred[ar[0]]+" "+tsT+" "+ten2[ar[4]];
                         if( count==6&&ar[1]==0&&ar[2]==0&&ar[3]==0&&ar[4]==1&&ar[5]!=0)
                         result= hundred[ar[0]]+" "+tsT+" "+ten[ar[5]];
                         if( count==6&&ar[1]==0&&ar[2]==0&&ar[3]==0&&ar[4]!=1&&ar[5]!=0)
                         result= hundred[ar[0]]+" "+tsT+" "+ten2[ar[4]]+" "+one[ar[5]];
                         if( count==7)
                         result= million; 

            state=result;                       

        }
                return state;
       
    }
}
export default new NumberStore();