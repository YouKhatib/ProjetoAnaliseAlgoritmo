#include <iostream>

void bubbleSort(int v[], int tam){
	int flag;
	for(int i = 0; i < tam-1; i++){
		for (int j = 0; j < tam-1; j++){
			if( v[j] > v[j+1]){
				flag = v[j+1];
				v[j+1] = v[j];
				v[j] = flag;
			}			
		}
	}
	for(int p = 0; p < tam; p++)
		std:: cout << v[p] << " ";
}
int main(int argc, char** argv) {
	int a[] = {8, 7, 6, 41, 32, 1, 4, 9, 8, 45, 4, 5};
	int size = sizeof(a) / sizeof(a[0]);
	bubbleSort(a, size);
	
	
	return 0;
}
