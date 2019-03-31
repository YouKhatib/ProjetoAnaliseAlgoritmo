#include "cardapio.h"
#include "ui_cardapio.h"

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
