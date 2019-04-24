#include "servico.h"
#include "ui_servico.h"

#include <qmessagebox.h>

Servico::Servico(QWidget *parent) :
    QDialog(parent),
    ui(new Ui::Servico)
{
    ui->setupUi(this);
}

Servico::~Servico()
{
    delete ui;
}

void Servico::on_pushButton_clicked()
{
    this->close();
}

void Servico::on_pushButton_2_clicked()
{
    QMessageBox::warning(this,"Serviço","Serviço de quarto solicitado");
}
