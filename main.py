from email.policy import default
from enum import unique
from fileinput import filename
from flask import Flask, render_template, request, redirect, url_for, jsonify, abort
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
import sys
from random import randrange
from git import Repo

app = Flask(__name__)
app.config.from_object('config')
db = SQLAlchemy(app)

migrate = Migrate(app, db)


class Genre(db.Model):
    __tablename__ = "genres"
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(), nullable=False)
    comic_id = db.Column(db.Integer, db.ForeignKey(
        'comics.id'), nullable=False)

    def __repr__(self):
        return f'<Genre ID: {self.id}, name: {self.name}>'


class Chapter(db.Model):
    __tablename__ = "chapters"
    id = db.Column(db.Integer, primary_key=True)
    num = db.Column(db.String(), nullable=False)
    release = db.Column(db.DateTime, nullable=False)
    images = db.Column(db.Text, nullable=False)
    tags = db.Column(db.String(), nullable=False)
    comic_id = db.Column(db.Integer, db.ForeignKey(
        'comics.id'), nullable=False)

    def __repr__(self):
        return f'<Chapter ID: {self.id}, Chapter No.: {self.num}, release: {self.release}>'


class Comic(db.Model):
    __tablename__ = "comics"
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(), nullable=False, unique=True)
    description = db.Column(db.Text, nullable=True)
    released = db.Column(db.DateTime, nullable=False)
    author = db.Column(db.String(), nullable=False)
    serialization = db.Column(db.String(), nullable=False)
    posted_by = db.Column(db.String(), nullable=False)
    image_link =  db.Column(db.String(), nullable=False)
    ratings =  db.Column(db.Float, nullable=False)
    status =  db.Column(db.String(), nullable=False)
    type = db.Column(db.String(), nullable=False)
    followed_by = db.Column(db.Integer, nullable=False)
    posted_on =  db.Column(db.DateTime, nullable=False)
    genres =  db.relationship('Genre', backref='list', lazy=True)
    updated_on = db.Column(db.DateTime, nullable=False)
    keywords = db.Column(db.String(), nullable=False)
    first_chapter =  db.Column(db.String(), nullable=False)
    last_chapter =  db.Column(db.String(), nullable=False)
    chapters = db.relationship('Chapter', backref='list', lazy=True)
    related_series = db.Column(db.String, nullable=False)
    is_popular = db.Column(db.Boolean, nullable=False, default=False)
    is_featured = db.Column(db.Boolean, nullable=False, default=False)
    is_trending = db.Column(db.Boolean, nullable=False, default=False)
    
    def __repr__(self):
        return f'<Comic ID: {self.id}, name: {self.title}, chapters: {self.chapters}>'


@app.route('/')
def index():
    featured = Comic.query.filter_by(is_featured=True).order_by('id').all()
    page = request.args.get('page', 1, type=int)
    latest_update = Comic.query.order_by('updated_on').paginate(page, per_page=5)
    popular_series = Comic.query.filter_by(is_popular=True).order_by('id').limit(5).all()
    trending = Comic.query.filter_by(is_trending=True).order_by('id').first()
    return render_template('index.html', slider=featured, popular=popular_series, latest=latest_update, trend=trending)



#Route for the GitHub webhook
@app.route('/git_update', methods=['POST'])
def git_update():
    reposi = Repo('./manhuareads')
    origin = reposi.remotes.origin
    reposi.create_head('main',
    origin.refs.main).set_tracking_branch(origin.refs.main).checkout()
    origin.pull()
    return '', 200

is_maintenance_mode = True

@app.route('/comic/<comic_title>')
def comic(comic_title):
    comic = Comic.query.filter_by(title=comic_title).first()
    chapters = Chapter.query.filter_by(comic_id=comic.id).order_by('id').all()
    
    print(comic)
    print('='*40)
    print(chapters)

    return render_template('comic_details.html', chapters=chapters, comic=comic)


@app.route('/comic/<comic_title>/<chapter_num>')
def comic_chapter(comic_title, chapter_num):
    comic = Comic.query.filter_by(title=comic_title).first()
    # chapter_details = Chapter.query.filter_by(comic_id=comic.id).filter_by(num=chapter_num).first()
    chapters = len(Chapter.query.filter_by(comic_id=comic.id).all())
    chapter_page = Chapter.query.filter_by(comic_id=comic.id).paginate(1, per_page=chapters)
    page_num = 0
    for chapter in chapter_page.items:
        page_num += 1
        print(chapter)
        if str(chapter.num) == str(chapter_num):
            print(page_num)
            break
    
    chapter_page = Chapter.query.filter_by(comic_id=comic.id).paginate(page_num, per_page=1)
    
    print(comic)
    print('*' * 40)
    # print(chapter_details)

    return render_template('comic_chapters.html', whole_chapter=chapter_page, comic=comic)


@app.route('/comics')
def comics():
    page = request.args.get('page', 1, type=int)
    comic_type = request.args.get('type', None, type=str)
    comic_status = request.args.get('type', None, type=str)
    comic_genre = request.args.get('genre', None, type=str)
    if comic_type != None and comic_status != None and comic_genre != None:
        comics = Comic.query.filter_by(type=comic_type).order_by('title').paginate(page, per_page=3)
    elif comic_status != None:
        comics = Comic.query.filter_by(type=comic_type).order_by('title').paginate(page, per_page=3)
    else:
        comics = Comic.query.order_by('title').paginate(page, per_page=5)
    return render_template('comics.html', results=comics)


@app.route('/random')
def random_comic():
    comic = Comic.query.all()
    selected = randrange(len(comic))
    title = comic[selected].title
    return redirect(url_for('comic', comic_title=title))


@app.route('/bookmarks')
def bookmarks():
    return render_template('bookmarks.html')


@app.route('/genre/<genre_title>')
def genres(genre_title):
    page = request.args.get('page', 1, type=int)
    books_in_genre = Comic.query.join(Comic.genres).filter_by(name=genre_title.capitalize()).order_by('title').paginate(page, per_page=2)
    genre = genre_title
    print(books_in_genre)
    return render_template('genres.html', books=books_in_genre, genre=genre)


@app.route('/comics/view-all')
def comics_view_all():
    results = Comic.query.order_by('updated_on').all()
    print(results)
    return render_template('all_comics.html', comics=results)

@app.route('/listmode')
def list_mode():
    letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    comics = Comic.query.all()
    return render_template('list_mode.html', letters=letters, comics=comics)

@app.route('/privacy-policy')
def privacy_policy():
    return render_template('privacy_policy.html')


@app.route('/digital-millennium-copyright-act')
def dcma():
    return render_template('dcma.html')


@app.route('/terms-of-use')
def terms_of_use():
    return render_template('terms_of_use.html')



if __name__ == '__main__':
    app.run(debug=True)
