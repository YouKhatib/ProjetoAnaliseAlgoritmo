#include "mainwindow.h"
#include "ui_mainwindow.h"
#include "registro.h"

MainWindow::MainWindow(QWidget *parent) :
    QMainWindow(parent),
    ui(new Ui::MainWindow)
{
    ui->setupUi(this);
    ui->senha->setEchoMode(QLineEdit::Password);
}

MainWindow::~MainWindow()
{
    delete ui;
}


void MainWindow::on_logIn_clicked()
{
    //QString usuario = ui->usuario->text();
    //QString senha = ui->senha->text();

    JanelaPrincipal janelaPrincipal;
    janelaPrincipal.setModal(true);
    janelaPrincipal.exec();


}


void MainWindow::on_registrar_clicked()
{
    Registro registro;
    registro.setModal(true);
    registro.exec();
}
