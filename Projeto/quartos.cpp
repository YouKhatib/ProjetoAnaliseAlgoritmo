#include "quartos.h"
#include "ui_quartos.h"
#include "janelaprincipal.h"

Quartos::Quartos(QWidget *parent) :
    QDialog(parent),
    ui(new Ui::Quartos)
{
    ui->setupUi(this);
}

Quartos::~Quartos()
{
    delete ui;
}

void Quartos::on_pushButton_2_clicked()
{
    this->close();
}
