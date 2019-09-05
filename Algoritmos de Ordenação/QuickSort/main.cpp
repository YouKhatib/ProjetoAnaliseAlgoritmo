#include <iostream>

int partition(int aq[], int p, int r){
	int x = aq[r];
	int i = p-1;
	int aux;
	for (int j = p; j < r; j++){
		if(aq[j] <= x){
			i++;
			aux = aq[i];
			aq[i] = aq[j];
			aq[j] = aux;
		}
	}
	aq[r] = aq[i+1];
	aq[i+1] = x;
	return i+1;
}

void quickSort(int a[], int p, int r){
	if(p < r){
		int q = partition(a, p, r);
		quickSort(a, p, q-1);
		quickSort(a, q+1, r);
	}

}

int main(int argc, char** argv) {
	int a[] = {8, 7, 6, 1, 10, 15, 12, 13, 20, 14, 11, 25};
	quickSort(a, 0, 12);
	for(int i = 0; i < 12; i++){
		std::cout << a[i] << ' ';
	}
	return 0;
}
