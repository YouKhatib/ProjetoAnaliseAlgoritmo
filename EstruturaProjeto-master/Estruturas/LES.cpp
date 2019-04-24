#include <iostream>
#include <cstdlib>
#define MAX 10

using namespace std;

class LES{

public:

	LES(): n(0) {}
	bool insere(int x){
		if(n == MAX){
			return 0;
		}

		int i;
		for(i = 0; i < n && v[i] <= x; i++);
		int j;
		for(j = n; j > i ; j--)
			v[j] = v[j-1];
		v[i] = x;
		n++;
		return -1;

	}
	
	int busca(int x){
		for(int i = 0; i < n && v[i] <= x; i++){
			if(v[i] == x){
				return i;
			}
		return -1;
		}
	}
	
	int buscaBinaria(int v[], int inicio, int f, int e){
		int i = inicio;
		if(v[i] = e){
			return i;
		}
		if(inicio = f){
			cout << "Elemento não existe" << endl;
		}
	}
	
	void print(){
		for(int i = 0; i < n; i++){
			cout << "Vetor: " << v[i] << "," << endl;
		}
	}
	
	bool remove(int index){
		if(index < 0){
			return false;
		}
		for(int k = index; k < n-1; k++){
			v[k] = v[k+1];
		}
		n--;
		return true;
	}

private:

    int v[MAX];
	int n;

};

int main(int argc, char* argv[]){

	LES* les = new LES();
	
	les->insere(20);
	les->insere(5);
	les->insere(1);
	les->insere(9);
	les->insere(4);
	les->insere(8);
	les->insere(2);
	les->insere(12);
	les->insere(19);
	les->insere(6);

	cout << "Está no endereço: " << les->busca(1) << endl;
	
	les->print();

	cout << "Vetor depois do remove: " << les->remove(3) <<endl;

	les->print();
	
	delete les;

	system("pause");
	return 0;
	
}
