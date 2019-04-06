#include "mainwindow.h"
#include "ui_mainwindow.h"
#include "registro.h"
#include <QFile>
#include <QMessageBox>
#include <fstream>

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
        std::ifstream usuario("login.txt");
        std::string linebuffer;
        std::string user[100];
        int i = 0;

        while (usuario && getline(usuario, linebuffer)){
            if (linebuffer.length() == 0)continue;
                user[i] = linebuffer;
                i++;
        }

        std::ifstream senha("senha.txt");
        std::string linha;
        std::string conteudoSenha[100];
        int p = 0;
        while (senha && getline(senha, linha)){
            if (linha.length() == 0)continue;
                conteudoSenha[p] = linha;
                p++;
            }
        int l = 0;
        std::string busca = ui->usuario->text().toStdString();
        std::string buscaS = ui->senha->text().toStdString();
        for(l; busca != user[l] && l < user->size(); l){
            l++;
        }
        if(user[l] == "" && conteudoSenha[l] == ""){
            QMessageBox::warning(this,"ERRO","Usuário ou senha incorretos");
            return;
        }
        if(busca != user[l] || buscaS != conteudoSenha[l]){
            QMessageBox::warning(this,"ERRO","Usuário ou senha incorretos");
            return;
        }
        if(busca == user[l] && buscaS == conteudoSenha[l]){
            JanelaPrincipal janelaPrincipal;
            janelaPrincipal.setModal(true);
            janelaPrincipal.exec();
        }

}


void MainWindow::on_registrar_clicked()
{
    Registro registro;
    registro.setModal(true);
    registro.exec();
}
