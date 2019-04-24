/********************************************************************************
** Form generated from reading UI file 'servico.ui'
**
** Created by: Qt User Interface Compiler version 5.13.0
**
** WARNING! All changes made in this file will be lost when recompiling UI file!
********************************************************************************/

#ifndef UI_SERVICO_H
#define UI_SERVICO_H

#include <QtCore/QVariant>
#include <QtWidgets/QApplication>
#include <QtWidgets/QDialog>
#include <QtWidgets/QPushButton>

QT_BEGIN_NAMESPACE

class Ui_Servico
{
public:
    QPushButton *pushButton;
    QPushButton *pushButton_2;

    void setupUi(QDialog *Servico)
    {
        if (Servico->objectName().isEmpty())
            Servico->setObjectName(QString::fromUtf8("Servico"));
        Servico->resize(400, 300);
        pushButton = new QPushButton(Servico);
        pushButton->setObjectName(QString::fromUtf8("pushButton"));
        pushButton->setGeometry(QRect(150, 250, 75, 23));
        pushButton_2 = new QPushButton(Servico);
        pushButton_2->setObjectName(QString::fromUtf8("pushButton_2"));
        pushButton_2->setGeometry(QRect(130, 180, 111, 23));

        retranslateUi(Servico);

        QMetaObject::connectSlotsByName(Servico);
    } // setupUi

    void retranslateUi(QDialog *Servico)
    {
        Servico->setWindowTitle(QCoreApplication::translate("Servico", "Dialog", nullptr));
        pushButton->setText(QCoreApplication::translate("Servico", "Voltar", nullptr));
        pushButton_2->setText(QCoreApplication::translate("Servico", "Servi\303\247o de Quarto", nullptr));
    } // retranslateUi

};

namespace Ui {
    class Servico: public Ui_Servico {};
} // namespace Ui

QT_END_NAMESPACE

#endif // UI_SERVICO_H
