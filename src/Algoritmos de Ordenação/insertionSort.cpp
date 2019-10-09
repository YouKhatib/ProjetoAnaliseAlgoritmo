//
//  main.cpp
//  InsertionSort
//
//  Created by Carolina Costa on 16/09/19.
//  Copyright © 2019 Carolina Costa. All rights reserved.
//

#include <iostream>
#include <stdio.h>

void insertionSort(int a[], int n) {
    int x, d, t;
    for (x = 1; x <= n-1; x++){
        d = x;
        while (d >0 && a[d] < a[d-1]){
            t = a[d];
            a[d] = a[d-1];
            a[d-1] = t;
            d--;
        }
    }
}
void printArray(int a[], int n){
    int i;
    for (i = 0; i < n; i++)
        std::cout << a[i] << " ";
    std::cout << std::endl;
}


int main()
{
    int a[] = { 0, 20, 9, 14, 3 };
    int n = sizeof(a) / sizeof(a[0]);
    
    insertionSort(a, n);
    printArray(a, n);
    
    return 0;
}  
