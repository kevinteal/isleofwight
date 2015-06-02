// JavaScript Document

function set_up_band_db(){
	//alert("DB");
	
	
		//Main Stage = 0
		//second stage = 1
		//thrid stage = 2
		//fourth = 3
		//fifth = 4
		
		db.transaction(function (tx) {		
		
		//tx.executeSql('DROP TABLE bands');
		
		tx.executeSql('CREATE TABLE IF NOT EXISTS bands (id UNIQUE, band_name TEXT, stage TEXT, day INTEGER, start_time INTEGER, finish_time INTEGER, band_fav INTEGER, stage_rank INTEGER, day_name, video_link TEXT)');
		

		//friday Main Stage
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (1, "The Black Keys", "Main Stage", 20150612, 2100, 2200, 0, 0, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (2, "The Prodigy", "Main Stage", 20150612, 2200, 2300, 0, 0, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (3, "You Me At Six", "Main Stage", 20150612, 2000, 2100, 0, 0, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (4, "Counting Crows", "Main Stage", 20150612, 1900, 2000, 0, 0, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (6, "Kodaline", "Main Stage", 20150612, 1800, 1900, 0, 0, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (7, "The Struts", "Main Stage", 20150612, 1700, 1800, 0, 0, "Friday", "video_link_HERE")');
	
		//Saturday Main Stage
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (8, "James", "Main Stage", 20150613, 2000, 2100, 0, 0, "Saturday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (9, "Pharrell Williams", "Main Stage", 20150613, 2100, 2200, 0, 0, "Saturday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (10, "Blur", "Main Stage", 20150613, 2200, 2300, 0, 0, "Saturday", "video_link_HERE")');
			tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (5, "James Bay", "Main Stage", 20150613, 1700, 1800, 0, 0, "Saturday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (11, "Kool And The Gang", "Main Stage", 20150613, 1900, 2000, 0, 0, "Saturday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (12, "Jessie Ware", "Main Stage", 20150613, 1800, 1900, 0, 0, "Saturday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (13, "Jess Glynne", "Main Stage", 20150613, 1600, 1700, 0, 0, "Saturday", "video_link_HERE")');
		
		//Sunday Main Stage
			tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (14, "Imelda May", "Main Stage", 20150614, 1800, 1900, 0, 0, "Sunday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (15, "The Courteeners", "Main Stage", 20150614, 1900, 2000, 0, 0, "Sunday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (16, "First Aid Kit", "Main Stage", 20150614, 2000, 2100, 0, 0, "Sunday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (17, "Paolo Nutini", "Main Stage", 20150614, 2100, 2200, 0, 0, "Sunday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (18, "Fleetwood Mac", "Main Stage", 20150614, 2200, 2300, 0, 0, "Sunday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (19, "Suzanne Vega", "Main Stage", 20150614, 1600, 1700, 0, 0, "Sunday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (20, "Jethro Tulls Ian Anderson", "Main Stage", 20150614, 1700, 1800, 0, 0, "Sunday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (21, "The Rainband", "Main Stage", 20150614, 1500, 1600, 0, 0, "Sunday", "video_link_HERE")');
		
		
		
		//thursday big top
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (22, "Billy Idol", "Big Top", 20150611, 2200, 2300, 0, 1, "Thursday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (23, "UB40s Ali Campbell Astro And Mickey Virtue", "Big Top", 20150611, 2100, 2200, 0, 1, "Thursday", "video_link_HERE")');
			tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (24, "Geno Washington And The Ram Jam Band", "Big Top", 20150611, 2000, 2100, 0, 1, "Thursday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (25, "Noasis", "Big Top", 20150611, 1900, 2000, 0, 1, "Thursday", "video_link_HERE")');
		
		
		//friday big top
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (26, "Groove Armada", "Big Top", 20150612, 2200, 2300, 0, 1, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (27, "Visconti And Woodmansey", "Big Top", 20150612, 2100, 2200, 0, 1, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (28, "Sharon Corr", "Big Top", 20150612, 2000, 2100, 0, 1, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (30, "Ruen Brothers", "Big Top", 20150612, 1800, 1900, 0, 1, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (31, "Larkin Poe", "Big Top", 20150612, 1900, 2000, 0, 1, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (32, "Up Down Go Machine", "Big Top", 20150612, 1700, 1800, 0, 1, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (33, "JJ Rosa", "Big Top", 20150612, 1600, 1700, 0, 1, "Friday", "video_link_HERE")');
		
		
		//saturday Big Top
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (34, "Paul Oakenfold", "Big Top", 20150613, 2200, 2300, 0, 1, "Saturday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (35, "Foxes", "Big Top", 20150613, 2000, 2100, 0, 1, "Saturday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (36, "The Shires", "Big Top", 20150613, 1900, 2000, 0, 1, "Saturday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (37, "Stiff Little Fingers", "Big Top", 20150613, 2100, 2200, 0, 1, "Saturday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (38, "Chicks On Speed", "Big Top", 20150613, 1800, 1900, 0, 1, "Saturday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (39, "La Femme", "Big Top", 20150613, 1700, 1800, 0, 1, "Saturday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (40, "Sunset Sons", "Big Top", 20150613, 1600, 1700, 0, 1, "Saturday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (41, "New City Kings", "Big Top", 20150613, 1500, 1600, 0, 1, "Saturday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (42, "Twin Wild", "Big Top", 20150613, 1400, 1500, 0, 1, "Saturday", "video_link_HERE")');
		
		
		
		//Sunday Big Top
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (43, "The Lightning Seeds", "Big Top", 20150614, 1900, 2000, 0, 1, "Sunday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (44, "The View", "Big Top", 20150614, 1800, 1900, 0, 1, "Sunday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (45, "The Charlatans", "Big Top", 20150614, 2200, 2300, 0, 1, "Sunday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (46, "Ash", "Big Top", 20150614, 2000, 2100, 0, 1, "Sunday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (47, "Coasts", "Big Top", 20150614, 1700, 1800, 0, 1, "Sunday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (48, "Sheppard", "Big Top", 20150614, 1600, 1700, 0, 1, "Sunday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (49, "DJ MK", "Big Top", 20150614, 2130, 2200, 0, 1, "Sunday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (50, "DJ Q", "Big Top", 20150614, 2115, 2130, 0, 1, "Sunday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (51, "Funk Butcher DJ", "Big Top", 20150614, 2100, 2115, 0, 1, "Sunday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (52, "Vambo", "Big Top", 20150614, 1500, 1600, 0, 1, "Sunday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (53, "The Bear Social", "Big Top", 20150614, 1300, 1400, 0, 1, "Sunday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (29, "Pretty Vicious", "Big Top", 20150614, 1400, 1500, 0, 1, "Sunday", "video_link_HERE")');
		
		//Friday Hard Rock Stage
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (54, "858 Orbitals Paul Hartnoll", "Hard Rock Stage", 20150612, 2200, 2300, 0, 2, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (55, "Ben Montague", "Hard Rock Stage", 20150612, 2100, 2200, 0, 2, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (56, "The High Kings", "Hard Rock Stage", 20150612, 2000, 2100, 0, 2, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (57, "Bethia Beadman", "Hard Rock Stage", 20150612, 1900, 2000, 0, 2, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (58, "Claydon Connor", "Hard Rock Stage", 20150612, 1800, 1900, 0, 2, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (59, "The Carnabys", "Hard Rock Stage", 20150612, 1700, 1800, 0, 2, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (60, "Germein Sisters", "Hard Rock Stage", 20150612, 1600, 1700, 0, 2, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (61, "Little Eye", "Hard Rock Stage", 20150612, 1500, 1600, 0, 2, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (62, "Honey Ryder", "Hard Rock Stage", 20150612, 1400, 1500, 0, 2, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (63, "King Eider", "Hard Rock Stage", 20150612, 1300, 1400, 0, 2, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (64, "Pronghorn", "Hard Rock Stage", 20150612, 1200, 1300, 0, 2, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (65, "Tim Arnold", "Hard Rock Stage", 20150612, 1100, 1200, 0, 2, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (66, "Sam Jones", "Hard Rock Stage", 20150612, 1000, 1100, 0, 2, "Friday", "video_link_HERE")');
		
		
		//friday jack rocks Stage
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (67, "Dave Mccabe And The Ramifications", "Jack Rocks Stage", 20150612, 1700, 1740, 0, 3, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (68, "Black Rivers", "Jack Rocks Stage", 20150612, 1700, 1740, 0, 3, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (69, "Kid Wave", "Jack Rocks Stage", 20150612, 1700, 1740, 0, 3, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (70, "Little Barrie", "Jack Rocks Stage", 20150612, 1700, 1740, 0, 3, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (71, "Eugene Mcguiness", "Jack Rocks Stage", 20150612, 1700, 1740, 0, 3, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (72, "Findlay", "Jack Rocks Stage", 20150612, 1700, 1740, 0, 3, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (73, "Man Made", "Jack Rocks Stage", 20150612, 1700, 1740, 0, 3, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (74, "Young Kato", "Jack Rocks Stage", 20150612, 1700, 1740, 0, 3, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (75, "Dexters", "Jack Rocks Stage", 20150612, 1700, 1740, 0, 3, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (76, "Life in Film", "Jack Rocks Stage", 20150612, 1700, 1740, 0, 3, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (77, "Storms", "Jack Rocks Stage", 20150612, 1700, 1740, 0, 3, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (78, "Serpent Power", "Jack Rocks Stage", 20150612, 1700, 1740, 0, 3, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (79, "The Sundowners", "Jack Rocks Stage", 20150612, 1700, 1740, 0, 3, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (80, "The Sherlocks", "Jack Rocks Stage", 20150612, 1700, 1740, 0, 3, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (81, "Sugarmen", "Jack Rocks Stage", 20150612, 1700, 1740, 0, 3, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (82, "The Slow Readers Club", "Jack Rocks Stage", 20150612, 1700, 1740, 0, 3, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (83, "Bulletproof Bomb", "Jack Rocks Stage", 20150612, 1700, 1740, 0, 3, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (84, "Hyena", "Jack Rocks Stage", 20150612, 1700, 1740, 0, 3, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (85, "Trampolene", "Jack Rocks Stage", 20150612, 1700, 1740, 0, 3, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (86, "Man And The Echo", "Jack Rocks Stage", 20150612, 1700, 1740, 0, 3, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (87, "Hidden Charms", "Jack Rocks Stage", 20150612, 1700, 1740, 0, 3, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (88, "The Jacques", "Jack Rocks Stage", 20150612, 1700, 1740, 0, 3, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (89, "Jolta", "Jack Rocks Stage", 20150612, 1700, 1740, 0, 3, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (90, "Sly Digs", "Jack Rocks Stage", 20150612, 1700, 1740, 0, 3, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (91, "Alias Kid", "Jack Rocks Stage", 20150612, 1700, 1740, 0, 3, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (92, "Cut", "Jack Rocks Stage", 20150612, 1700, 1740, 0, 3, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (93, "Glass Caves", "Jack Rocks Stage", 20150612, 1700, 1740, 0, 3, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (94, "Kassassin Street", "Jack Rocks Stage", 20150612, 1700, 1740, 0, 3, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (95, "Tijuana Bibles", "Jack Rocks Stage", 20150612, 1700, 1740, 0, 3, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (96, "Bang Bang Romeo", "Jack Rocks Stage", 20150612, 1700, 1740, 0, 3, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (97, "Decoy Jet", "Jack Rocks Stage", 20150612, 1700, 1740, 0, 3, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (98, "The Franklys", "Jack Rocks Stage", 20150612, 1700, 1740, 0, 3, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (99, "Conor Houston", "Jack Rocks Stage", 20150612, 1700, 1740, 0, 3, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (100, "The Watchmakers", "Jack Rocks Stage", 20150612, 1700, 1740, 0, 3, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (101, "Medicine Men", "Jack Rocks Stage", 20150612, 1700, 1740, 0, 3, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (102, "Judas", "Jack Rocks Stage", 20150612, 1700, 1740, 0, 3, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (103, "The SSS", "Jack Rocks Stage", 20150612, 1700, 1740, 0, 3, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (104, "Savage Nomads", "Jack Rocks Stage", 20150612, 1700, 1740, 0, 3, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (105, "Bully Bones", "Jack Rocks Stage", 20150612, 1700, 1740, 0, 3, "Friday", "video_link_HERE")');
		
		
		
	
	});
	
	
	//updates here
	db.transaction(function(tx){
		//tx.executeSql('UPDATE bands SET start_time=1700 WHERE id=1');
		//tx.executeSql('DELETE FROM bands WHERE id=74');
		
		
		//bands change from friday to thurs on hard rock
		tx.executeSql('UPDATE bands SET day=20150611, day_name="Thursday" WHERE id=64');
		
		//bands change from friday to saturday on hard rock stage
		tx.executeSql('UPDATE bands SET day=20150613, day_name="Saturday" WHERE id=57');
		tx.executeSql('UPDATE bands SET day=20150613, day_name="Saturday" WHERE id=59');
		tx.executeSql('UPDATE bands SET day=20150613, day_name="Saturday" WHERE id=61');
		tx.executeSql('UPDATE bands SET day=20150613, day_name="Saturday" WHERE id=62');
		
		//band change from friday to sunday hard rock stage.
		tx.executeSql('UPDATE bands SET day=20150614, day_name="Sunday" WHERE id=54');
		tx.executeSql('UPDATE bands SET day=20150614, day_name="Sunday" WHERE id=55');
		tx.executeSql('UPDATE bands SET day=20150614, day_name="Sunday" WHERE id=56');
		tx.executeSql('UPDATE bands SET day=20150614, day_name="Sunday" WHERE id=63');
		tx.executeSql('UPDATE bands SET day=20150614, day_name="Sunday" WHERE id=66');
		
		//bands to delete
		tx.executeSql('DELETE FROM bands WHERE id=65');
		
		//bands to thurs hard rock
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (106, "Diesel Park West", "Hard Rock Stage", 20150611, 2200, 2300, 0, 2, "Thursday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (107, "30Ten", "Hard Rock Stage", 20150611, 2100, 2200, 0, 2, "Thursday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (108, "Nick Cane", "Hard Rock Stage", 20150611, 2000, 2100, 0, 2, "Thursday", "video_link_HERE")');
		
		//bands added friday hard rock
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (109, "Parker", "Hard Rock Stage", 20150612, 2200, 2300, 0, 2, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (110, "LiA", "Hard Rock Stage", 20150612, 2100, 2200, 0, 2, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (111, "Kerri Watt", "Hard Rock Stage", 20150612, 2000, 2100, 0, 2, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (112, "Arno Carstens", "Hard Rock Stage", 20150612, 1900, 2000, 0, 2, "Friday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (113, "Novatones", "Hard Rock Stage", 20150612, 1800, 1900, 0, 2, "Friday", "video_link_HERE")');
		
		//saturday bands added hard rock
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (114, "Eddie And The Robbers", "Hard Rock Stage", 20150613, 2200, 2300, 0, 2, "Saturday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (115, "The Ravels", "Hard Rock Stage", 20150613, 2000, 2100, 0, 2, "Saturday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (116, "Curran", "Hard Rock Stage", 20150613, 1900, 2000, 0, 2, "Saturday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (117, "The Dirty Strangers", "Hard Rock Stage", 20150613, 1800, 1900, 0, 2, "Saturday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (118, "Kenneth J Nash", "Hard Rock Stage", 20150613, 1700, 1800, 0, 2, "Saturday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (119, "Fantasy", "Hard Rock Stage", 20150613, 1600, 1700, 0, 2, "Saturday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (120, "Johnny Lucas", "Hard Rock Stage", 20150613, 1500, 1600, 0, 2, "Saturday", "video_link_HERE")');
		
		//sunday hard rock added bands
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (121, "The Soho Hobo", "Hard Rock Stage", 20150614, 2100, 2200, 0, 2, "Sunday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (122, "Skinny Living", "Hard Rock Stage", 20150614, 2000, 2100, 0, 2, "Sunday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (123, "Red Sky July", "Hard Rock Stage", 20150614, 1900, 2000, 0, 2, "Sunday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (124, "Los Pacaminos", "Hard Rock Stage", 20150614, 1800, 1900, 0, 2, "Sunday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (125, "The Nelson Brothers", "Hard Rock Stage", 20150614, 1700, 1800, 0, 2, "Sunday", "video_link_HERE")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (126, "Ella Janes", "Hard Rock Stage", 20150614, 1600, 1700, 0, 2, "Sunday", "video_link_HERE")');
			tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (127, "Thundernauts", "Hard Rock Stage", 20150614, 1500, 1600, 0, 2, "Sunday", "video_link_HERE")');
		
		set_up_main_page();
	});
}













