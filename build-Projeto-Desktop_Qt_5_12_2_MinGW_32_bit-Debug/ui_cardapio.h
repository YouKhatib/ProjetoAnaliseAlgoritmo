/********************************************************************************
** Form generated from reading UI file 'cardapio.ui'
**
** Created by: Qt User Interface Compiler version 5.12.2
**
** WARNING! All changes made in this file will be lost when recompiling UI file!
********************************************************************************/

#ifndef UI_CARDAPIO_H
#define UI_CARDAPIO_H

#include <QtCore/QVariant>
#include <QtWidgets/QApplication>
#include <QtWidgets/QDialog>
#include <QtWidgets/QListView>
#include <QtWidgets/QPushButton>

QT_BEGIN_NAMESPACE

class Ui_Cardapio
{
public:
    QListView *listView;
    QPushButton *pushButton;

    void setupUi(QDialog *Cardapio)
    {
        if (Cardapio->objectName().isEmpty())
            Cardapio->setObjectName(QString::fromUtf8("Cardapio"));
        Cardapio->resize(400, 300);
        listView = new QListView(Cardapio);
        listView->setObjectName(QString::fromUtf8("listView"));
        listView->setGeometry(QRect(60, 50, 256, 192));
        pushButton = new QPushButton(Cardapio);
        pushButton->setObjectName(QString::fromUtf8("pushButton"));
        pushButton->setGeometry(QRect(250, 260, 75, 23));

        retranslateUi(Cardapio);

        QMetaObject::connectSlotsByName(Cardapio);
    } // setupUi

    void retranslateUi(QDialog *Cardapio)
    {
        Cardapio->setWindowTitle(QApplication::translate("Cardapio", "Dialog", nullptr));
        pushButton->setText(QApplication::translate("Cardapio", "Voltar", nullptr));
    } // retranslateUi

};

namespace Ui {
    class Cardapio: public Ui_Cardapio {};
} // namespace Ui

QT_END_NAMESPACE

#endif // UI_CARDAPIO_H
