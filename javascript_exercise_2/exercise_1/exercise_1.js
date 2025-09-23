 function getGrade() {
            let score = Number(prompt("enter your grade"));
            
            if (score >= 90){
                console.log(`Score: ${score} - Grade: A`);
            } else if(score >= 80){
                console.log(`Score: ${score} - Grade: B `);
            } else if(score >= 70){
                console.log(`Score: ${score} - Grade: C `);
            } else if(score >= 60){
                console.log(`Score: ${score} - Grade: D `);
            } else if(score <= 60){
                console.log(`Score: ${score} - Grade: F `);
            } else if(score === 100){
                console.log(`Outstanding! Grade: A+ `);
            }
            
        }
        console.log(getGrade(score)) 