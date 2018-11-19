#ifndef BACKGROUND_H
#define BACKGROUND_H

#include <QtWidgets>

class TPCard: public QObject, public QGraphicsPixmapItem {

    Q_OBJECT
    Q_PROPERTY(QPointF position MEMBER _pos READ position WRITE setPosition)

public:
    TPCard(const QPixmap &image, QGraphicsItem *parent = 0);
    virtual ~TPCard();

    void setPosition(QPointF position);
    QPointF position() const;

private:
    QPointF _offset;
    QPointF _pos;
};

#endif // BACKGROUND_H
