#include "janelaprincipal.h"
#include "ui_janelaprincipal.h"
#include "mainwindow.h"
#include "quartos.h"
#include "cardapio.h"
#include "servico.h"


JanelaPrincipal::JanelaPrincipal(QWidget *parent) :
    QDialog(parent),
    ui(new Ui::JanelaPrincipal)
{
    ui->setupUi(this);
}

JanelaPrincipal::~JanelaPrincipal()
{
    delete ui;
}

void JanelaPrincipal::on_pushButton_3_clicked()
{
    this->close();
}

void JanelaPrincipal::on_pushButton_clicked()
{
    Quartos quartos;
    quartos.setModal(true);
    quartos.exec();
}

void JanelaPrincipal::on_pushButton_2_clicked()
{
    Cardapio cardapio;
    cardapio.setModal(true);
    cardapio.exec();
}

void JanelaPrincipal::on_pushButton_4_clicked()
{
    Servico serQuarto;
    serQuarto.setModal(true);
    serQuarto.exec();

}
