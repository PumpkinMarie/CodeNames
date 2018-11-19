#include "mainwindow.h"
#include <QApplication>
#include <QtWidgets>
#include "background.h"

int main(int argc, char *argv[])
{
    QApplication a(argc, argv);

    //MainWindow w;
    QImage background("ressources/images.jpeg");
    QGraphicsScene scene(-350,-350, 700,700);
    QGraphicsView view;
    view.setScene(&scene);
    view.setBackgroundBrush(background);
    view.show();

    return a.exec();
}
