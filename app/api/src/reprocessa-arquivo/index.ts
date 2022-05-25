import { stringify } from "querystring";

export function reprocessarArquivo(pathFile: any): void {

const fs = require(`fs`);

function numFormat(n:number) :string {
    //truncar sem arredondar:  n = Math.trunc(n*100)/100;
	return (n.toFixed(2)).replace('.', ',');
}

function parseNum(n:string): number {
	return parseFloat(n.replace(",", "."))
}


try {
    var lineNum:number = 0;
    var lineNum2:string;
    const data =  fs.readFileSync(pathFile, 'utf8');
    const lines = data.split('\n');
    const log_lines: any = [];
    const out_lines: any = [];
    var total_bc_pis: number = 0;
    var valor_pis: number = 0;
    var entsai: string = '';
    lines.forEach((line: any) => {
   //    for(let line of lines) {
        lineNum++;
        const cols:any[] = line.split("|");
        if (cols[1] == 'C100') {
            if (cols[2] === 0) {
                entsai = 'E';
            } else {
                entsai = 'S'
            }
        }
        if (cols[1] == 'C170' && cols[15]!==0 && entsai === 'S') {
            var c26:number = parseNum(cols[26]) - parseNum(cols[15]);
            var c30:number = c26 * parseNum(cols[27]) / 100;
            cols[26] = numFormat(c26);
            cols[30] = numFormat(c30); 

            total_bc_pis += c26;
            valor_pis += c30;

            var line2 = cols.join("|");
            lineNum2 = lineNum.toString().padStart(8, '0');
            log_lines.push(lineNum2  +',ANTES:' + line);
            log_lines.push('        '+'DEPOIS:' + line2);
            log_lines.push('');
        }
        if (cols[1] == 'C175' && cols[15]!==0 && entsai == 'S') {
            var c26:number = parseNum(cols[26]) - parseNum(cols[15]);
            var c30:number = c26 * parseNum(cols[27]) / 100;
            cols[26] = numFormat(c26);
            cols[30] = numFormat(c30); 

            total_bc_pis += c26;
            valor_pis += c30;

            var line2 = cols.join("|");
            lineNum2 = lineNum.toString().padStart(8, '0');
            log_lines.push(lineNum2  +',ANTES:' + line);
            log_lines.push('        '+'DEPOIS:' + line2);
            log_lines.push('');
        }
        if (cols[1] == 'M100') {
            cols[4] = numFormat(total_bc_pis);
            cols[8] = numFormat(valor_pis);             

            var line2 = cols.join("|");
            log_lines.push('ANTES,'+lineNum+':' + line);
            log_lines.push('DEPOIS:' + line2);
            log_lines.push('');
        }

        line = cols.join("|");
        out_lines.push(line);
    })
    fs.writeFileSync(pathFile+'log', log_lines.join('\n')); 
    fs.writeFileSync(pathFile+'new', out_lines.join('\n'));


    console.log(lines.length);
 //   console.log(data);
 //   let datasplit = data.split("|", 2);
 //   if (datasplit[1] == 'C100') {
 //       console.log("achou C100"); 
 //   } else {
 //       console.log("nao achou");
 //   }
}   catch (err) {
    console.error(err);
    } 
}