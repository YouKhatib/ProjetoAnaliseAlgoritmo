#include "cardapio.h"
#include "ui_cardapio.h"

lde objeto, *recente;
Cardapio::Cardapio(QWidget *parent) :
    QDialog(parent),
    ui(new Ui::Cardapio)
{
    ui->setupUi(this);

}

Cardapio::~Cardapio()
{
    delete ui;
}

void Cardapio::on_pushButton_clicked()
{
    this->close();
}

void Cardapio::on_pushButton_2_clicked()
{

    ui->textBrowser->setText("");
    if(!recente){
        mudarCardapio a;
        objeto = a.getObj();
    }
    recente = objeto.primeiro;
    //for(int i = 0; i < objeto.n - 1; i++){
        QString nome = QString::fromStdString(recente->nome);
        QString preco = QString::number(recente->val);
        ui->textBrowser->append(nome + " | " + preco + " R$");
        recente = recente->proximo;
    //}

}
