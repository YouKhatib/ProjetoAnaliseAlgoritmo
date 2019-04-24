#include "adm.h"
#include "ui_adm.h"
#include "mudarcardapio.h"
adm::adm(QWidget *parent) :
    QDialog(parent),
    ui(new Ui::adm)
{
    ui->setupUi(this);
}

adm::~adm()
{
    delete ui;
}

void adm::on_pushButton_4_clicked()
{
    this->close();
}

void adm::on_pushButton_2_clicked()
{
    mudarCardapio cardapio;
    cardapio.setModal(true);
    cardapio.exec();
}
