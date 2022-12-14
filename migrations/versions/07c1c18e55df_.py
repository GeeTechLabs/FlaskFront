"""empty message

Revision ID: 07c1c18e55df
Revises: 
Create Date: 2022-08-25 15:36:04.795187

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '07c1c18e55df'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('comics',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('title', sa.String(), nullable=False),
    sa.Column('description', sa.Text(), nullable=True),
    sa.Column('released', sa.DateTime(), nullable=False),
    sa.Column('author', sa.String(), nullable=False),
    sa.Column('serialization', sa.String(), nullable=False),
    sa.Column('posted_by', sa.String(), nullable=False),
    sa.Column('image_link', sa.String(), nullable=False),
    sa.Column('ratings', sa.Float(), nullable=False),
    sa.Column('status', sa.String(), nullable=False),
    sa.Column('type', sa.String(), nullable=False),
    sa.Column('followed_by', sa.Integer(), nullable=False),
    sa.Column('posted_on', sa.DateTime(), nullable=False),
    sa.Column('updated_on', sa.DateTime(), nullable=False),
    sa.Column('keywords', sa.String(), nullable=False),
    sa.Column('first_chapter', sa.String(), nullable=False),
    sa.Column('last_chapter', sa.String(), nullable=False),
    sa.Column('related_series', sa.String(), nullable=False),
    sa.Column('is_popular', sa.Boolean(), nullable=False),
    sa.Column('is_featured', sa.Boolean(), nullable=False),
    sa.Column('is_trending', sa.Boolean(), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('chapters',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('num', sa.String(), nullable=False),
    sa.Column('release', sa.DateTime(), nullable=False),
    sa.Column('images', sa.Text(), nullable=False),
    sa.Column('tags', sa.String(), nullable=False),
    sa.Column('comic_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['comic_id'], ['comics.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('genres',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(), nullable=False),
    sa.Column('comic_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['comic_id'], ['comics.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('genres')
    op.drop_table('chapters')
    op.drop_table('comics')
    # ### end Alembic commands ###
