import { ICriterion } from "./ICriterion";

export class CriterionDoublePair implements ICriterion {
    
    check(string: string): boolean {
        let foundDoublePair = false;
        string.split('').map((c, i, a) => {
            if(a[i-1]) {
                let toLookFor = a[i-1]+c;
                let leftSub = string.substring(0,i-1);
                let rightSub = string.substring(i+1);
                if (leftSub.includes(toLookFor) || rightSub.includes(toLookFor)) {
                    foundDoublePair = true;
                }
            } 
            if (a[i+1]) {
                let toLookFor = c+a[i+1];
                let leftSub = string.substring(0,i);
                let rightSub = string.substring(i+2);
                if (leftSub.includes(toLookFor) || rightSub.includes(toLookFor)) {
                    foundDoublePair = true;
                }
            }
        })
        return foundDoublePair;
    }

}
