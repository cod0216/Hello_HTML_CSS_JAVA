#include <stdio.h>

int main() {
    int k =0;
    int cnt = 0;

    for (int i = 0; i < 4; i++){
        printf("i = %d번째 실행 \n", i);
        for(int j = 0; j < 5; j++){
        if(j == 2)
        {
        printf("i = %d번째, j = %d번째 생략 \n", i, j);        
            break;
        }
        printf("i = %d번째, j = %d번째 실행 \n", i, j);    
        }
        printf("\n");
    }
    
}