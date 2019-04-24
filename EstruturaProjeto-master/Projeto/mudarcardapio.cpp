#include "mudarcardapio.h"
#include "ui_mudarcardapio.h"
#include <QMessageBox>

lde obj, *atual;
mudarCardapio::mudarCardapio(QWidget *parent) :
    QDialog(parent),
    ui(new Ui::mudarCardapio)
{
    ui->setupUi(this);

    if(obj.getN() == 0){
        obj.insere(16.00, "teste 0");
        obj.insere(17.00, "teste 1");
        obj.insere(12.00, "teste 2");
        obj.insere(10.00, "teste 3");
        obj.insere(19.00, "teste 4");
        obj.insere(5.00, "teste 5");
    }

}

mudarCardapio::~mudarCardapio()
{
    delete ui;
}


void mudarCardapio::on_pushButton_clicked()
{
    std::string nome = ui->lineEdit_2->text().toStdString();
    double preco = ui->lineEdit_3->text().toDouble();
    obj.insere(preco, nome);
}

void mudarCardapio::on_pushButton_2_clicked()
{
    std::string nome = ui->lineEdit->text().toStdString();
    if(obj.remove(nome) == false){
        QMessageBox::warning(this,"ERRO","Prato não encontrado");
        return;
    }

}
void mudarCardapio::on_pushButton_3_clicked()
{
    ui->textBrowser->setText("");
    //if(!atual){
    //}
    atual = obj.primeiro;
    while(atual){
        QString nome = QString::fromStdString(atual->nome);
        QString preco = QString::number(atual->val);
        ui->textBrowser->append(nome + " | " + preco + " R$");
        atual = atual->proximo;
    }
}

void mudarCardapio::on_pushButton_4_clicked()
{
    this->close();
}

lde mudarCardapio::getObj(){
    return obj;
}
