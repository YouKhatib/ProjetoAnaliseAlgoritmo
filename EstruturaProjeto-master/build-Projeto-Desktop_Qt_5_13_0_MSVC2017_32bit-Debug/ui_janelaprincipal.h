/********************************************************************************
** Form generated from reading UI file 'janelaprincipal.ui'
**
** Created by: Qt User Interface Compiler version 5.13.0
**
** WARNING! All changes made in this file will be lost when recompiling UI file!
********************************************************************************/

#ifndef UI_JANELAPRINCIPAL_H
#define UI_JANELAPRINCIPAL_H

#include <QtCore/QVariant>
#include <QtWidgets/QApplication>
#include <QtWidgets/QDialog>
#include <QtWidgets/QPushButton>

QT_BEGIN_NAMESPACE

class Ui_JanelaPrincipal
{
public:
    QPushButton *pushButton;
    QPushButton *pushButton_2;
    QPushButton *pushButton_3;
    QPushButton *pushButton_4;

    void setupUi(QDialog *JanelaPrincipal)
    {
        if (JanelaPrincipal->objectName().isEmpty())
            JanelaPrincipal->setObjectName(QString::fromUtf8("JanelaPrincipal"));
        JanelaPrincipal->resize(400, 300);
        pushButton = new QPushButton(JanelaPrincipal);
        pushButton->setObjectName(QString::fromUtf8("pushButton"));
        pushButton->setGeometry(QRect(120, 120, 141, 23));
        pushButton_2 = new QPushButton(JanelaPrincipal);
        pushButton_2->setObjectName(QString::fromUtf8("pushButton_2"));
        pushButton_2->setGeometry(QRect(120, 160, 141, 23));
        pushButton_3 = new QPushButton(JanelaPrincipal);
        pushButton_3->setObjectName(QString::fromUtf8("pushButton_3"));
        pushButton_3->setGeometry(QRect(120, 240, 141, 23));
        pushButton_4 = new QPushButton(JanelaPrincipal);
        pushButton_4->setObjectName(QString::fromUtf8("pushButton_4"));
        pushButton_4->setGeometry(QRect(120, 200, 141, 31));

        retranslateUi(JanelaPrincipal);

        QMetaObject::connectSlotsByName(JanelaPrincipal);
    } // setupUi

    void retranslateUi(QDialog *JanelaPrincipal)
    {
        JanelaPrincipal->setWindowTitle(QCoreApplication::translate("JanelaPrincipal", "Dialog", nullptr));
        pushButton->setText(QCoreApplication::translate("JanelaPrincipal", "Quartos", nullptr));
        pushButton_2->setText(QCoreApplication::translate("JanelaPrincipal", "Card\303\241pio", nullptr));
        pushButton_3->setText(QCoreApplication::translate("JanelaPrincipal", "Sair", nullptr));
        pushButton_4->setText(QCoreApplication::translate("JanelaPrincipal", "Servi\303\247o de quarto", nullptr));
    } // retranslateUi

};

namespace Ui {
    class JanelaPrincipal: public Ui_JanelaPrincipal {};
} // namespace Ui

QT_END_NAMESPACE

#endif // UI_JANELAPRINCIPAL_H
